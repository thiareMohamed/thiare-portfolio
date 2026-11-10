# Notifications push sur Android et iOS avec Flutter et React Native

Ce guide suit l'ordre dans lequel les choses se configurent : Apple, Firebase, l'application, puis le backend. Il couvre Flutter, React Native (CLI) et Expo.

## 1. Architecture

Une notification push ne va jamais directement du serveur au téléphone. Elle passe par le service de la plateforme :

- iOS : APNs (*Apple Push Notification service*)
- Android : FCM (*Firebase Cloud Messaging*), intégré aux Google Play Services

Pour ne pas maintenir deux intégrations, on passe en général par FCM pour les deux plateformes. Le backend n'appelle que FCM, qui transmet à APNs pour les appareils iOS.

```
Backend ──► FCM (HTTP v1) ──┬──► Android (Play Services)
                            └──► APNs ──► iOS
```

Dans l'ordre :

1. L'app demande la permission à l'utilisateur.
2. L'app récupère un token d'appareil (FCM token).
3. L'app envoie ce token au backend, qui le stocke avec l'utilisateur et l'appareil.
4. Le backend envoie un message à FCM en ciblant ce token (ou un *topic*).
5. Le système affiche la notification, ou réveille l'app pour la traiter.

### Message « notification » ou message « data » ?

Le type de message détermine qui affiche la notification :

| Type | Contenu | App en arrière-plan / fermée | App au premier plan |
|---|---|---|---|
| Notification | `notification: { title, body }` | Affichée par le système | Non affichée, c'est à l'app de le faire |
| Data | `data: { ... }` uniquement | Transmise à votre handler en arrière-plan (non garantie sur iOS) | Transmise à votre listener |
| Mixte | Les deux | Affichée, `data` disponible au clic | Listener avec les deux |

Sur Android, une notification reçue pendant que l'app est ouverte ne s'affiche donc pas. Il faut passer par une librairie de notifications locales.

## 2. Prérequis communs

- Un projet Firebase (gratuit).
- Un compte Apple Developer payant, obligatoire pour les push sur iOS.
- Un iPhone de test. Le simulateur reçoit les push distantes depuis Xcode 14 (macOS 13+, Mac Apple Silicon ou T2), mais mieux vaut valider sur un vrai appareil.
- Le bundle ID iOS et le package Android définitifs, puisque la configuration Firebase en dépend.

## 3. Configuration Apple (APNs)

Cette partie se fait une seule fois par compte développeur.

### 3.1 Créer une clé APNs (.p8)

1. Sur developer.apple.com, ouvrez Certificates, Identifiers & Profiles → Keys.
2. Cliquez sur +, nommez la clé et cochez Apple Push Notifications service (APNs).
3. Téléchargez le fichier `.p8`. Apple ne le propose qu'une fois, gardez-le dans un gestionnaire de secrets.
4. Notez le Key ID (sur la page de la clé) et le Team ID (en haut à droite du compte).

La clé `.p8` remplace les anciens certificats `.p12`. Elle n'expire pas, sert pour toutes les apps du compte et fonctionne en développement comme en production.

### 3.2 Activer la capacité Push sur l'App ID

Dans Identifiers, ouvrez l'App ID de l'application et vérifiez que Push Notifications est cochée. Avec la signature automatique de Xcode, ajouter la capacité dans le projet (voir plus bas) suffit.

### 3.3 Relier la clé à Firebase

Dans la console Firebase, allez dans Paramètres du projet → Cloud Messaging → Configuration de l'application Apple → Clé d'authentification APNs, puis importez le `.p8` avec le Key ID et le Team ID.

Si cette étape manque, l'app iOS reçoit bien un token FCM mais aucun message n'arrive.

## 4. Configuration Firebase

1. Dans la console Firebase, ajoutez une app Android avec le package exact (par exemple `com.monentreprise.monapp`) et une app iOS avec le bundle ID exact.
2. Récupérez les fichiers de configuration :
   - `google-services.json` pour Android
   - `GoogleService-Info.plist` pour iOS

Avec Flutter, la CLI FlutterFire s'en charge (section suivante).

## 5. Flutter

### 5.1 Dépendances et configuration Firebase

```bash
flutter pub add firebase_core firebase_messaging flutter_local_notifications

dart pub global activate flutterfire_cli
flutterfire configure
```

`flutterfire configure` enregistre les apps dans votre projet Firebase et génère `lib/firebase_options.dart`.

### 5.2 Côté iOS (Xcode)

Ouvrez `ios/Runner.xcworkspace`. Dans Signing & Capabilities de la cible Runner, ajoutez Push Notifications, puis Background Modes avec l'option Remote notifications cochée.

### 5.3 Côté Android

Dans `android/app/src/main/AndroidManifest.xml`, déclarez la permission requise depuis Android 13 et le canal par défaut :

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

    <application ...>
        <meta-data
            android:name="com.google.firebase.messaging.default_notification_channel_id"
            android:value="high_importance_channel" />
        <meta-data
            android:name="com.google.firebase.messaging.default_notification_icon"
            android:resource="@drawable/ic_notification" />
    </application>
</manifest>
```

L'icône `ic_notification` doit être blanche sur fond transparent. Android n'utilise que la transparence de l'image, une icône opaque s'affiche comme un carré blanc.

Les versions récentes de `flutter_local_notifications` demandent aussi le *desugaring* Java dans `android/app/build.gradle.kts` :

```kotlin
android {
    compileOptions {
        isCoreLibraryDesugaringEnabled = true
    }
}

dependencies {
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.1.4")
}
```

### 5.4 Initialisation et handler d'arrière-plan

Le handler d'arrière-plan doit être une fonction de premier niveau, hors de toute classe, avec l'annotation `@pragma('vm:entry-point')` pour qu'elle ne soit pas supprimée en build release :

```dart
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'firebase_options.dart';

@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  // Traitement léger uniquement : mise à jour d'un cache, d'un badge…
}

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  FirebaseMessaging.onBackgroundMessage(firebaseMessagingBackgroundHandler);
  await PushService.instance.init();
  runApp(const MyApp());
}
```

### 5.5 Le service de notifications

```dart
import 'dart:io';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

class PushService {
  PushService._();
  static final instance = PushService._();

  final _messaging = FirebaseMessaging.instance;
  final _local = FlutterLocalNotificationsPlugin();

  static const _channel = AndroidNotificationChannel(
    'high_importance_channel',
    'Notifications importantes',
    description: 'Messages et alertes de l’application',
    importance: Importance.high,
  );

  Future<void> init() async {
    // 1. Permission (iOS + Android 13 et plus)
    final settings = await _messaging.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );
    if (settings.authorizationStatus == AuthorizationStatus.denied) return;

    // 2. Canal Android + plugin de notifications locales
    await _local
        .resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin>()
        ?.createNotificationChannel(_channel);

    await _local.initialize(
      const InitializationSettings(
        android: AndroidInitializationSettings('@drawable/ic_notification'),
        iOS: DarwinInitializationSettings(),
      ),
      onDidReceiveNotificationResponse: (response) =>
          _openFromPayload(response.payload),
    );

    // 3. iOS : afficher les notifications au premier plan
    await _messaging.setForegroundNotificationPresentationOptions(
      alert: true,
      badge: true,
      sound: true,
    );

    // 4. Token : sur iOS, attendre le token APNs avant le token FCM
    if (Platform.isIOS) {
      final apns = await _messaging.getAPNSToken();
      if (apns == null) return; // réessayer plus tard
    }
    final token = await _messaging.getToken();
    if (token != null) await _sendTokenToBackend(token);
    _messaging.onTokenRefresh.listen(_sendTokenToBackend);

    // 5. Messages reçus au premier plan (Android : affichage manuel)
    FirebaseMessaging.onMessage.listen((message) {
      final n = message.notification;
      if (n == null || !Platform.isAndroid) return;
      _local.show(
        n.hashCode,
        n.title,
        n.body,
        NotificationDetails(
          android: AndroidNotificationDetails(
            _channel.id,
            _channel.name,
            importance: Importance.high,
            priority: Priority.high,
          ),
        ),
        payload: message.data['route'],
      );
    });

    // 6. Clic sur une notification (app en arrière-plan)
    FirebaseMessaging.onMessageOpenedApp.listen(
      (m) => _openFromPayload(m.data['route']),
    );

    // 7. Clic sur une notification (app fermée)
    final initial = await _messaging.getInitialMessage();
    if (initial != null) _openFromPayload(initial.data['route']);
  }

  Future<void> _sendTokenToBackend(String token) async {
    // POST /devices { token, platform, userId }
  }

  void _openFromPayload(String? route) {
    if (route == null) return;
    // navigatorKey.currentState?.pushNamed(route);
  }
}
```

Sur iOS, il faut appeler `getAPNSToken()` avant `getToken()`, sinon le premier lancement échoue avec l'erreur `apns-token-not-set`.

Le token peut changer après une réinstallation, une restauration ou un effacement des données. `onTokenRefresh` sert à renvoyer la nouvelle valeur au backend.

Sur iOS, `setForegroundNotificationPresentationOptions` suffit pour afficher la bannière quand l'app est ouverte, sans passer par les notifications locales.

### 5.6 Topics

Pour diffuser à un groupe sans gérer de liste de tokens :

```dart
await FirebaseMessaging.instance.subscribeToTopic('promotions');
await FirebaseMessaging.instance.unsubscribeFromTopic('promotions');
```

## 6. React Native (CLI) avec React Native Firebase

### 6.1 Installation

```bash
npm install @react-native-firebase/app @react-native-firebase/messaging
```

### 6.2 Android

1. Copiez `google-services.json` dans `android/app/`.
2. Dans `android/build.gradle` :

```groovy
buildscript {
    dependencies {
        classpath("com.google.gms:google-services:4.4.2")
    }
}
```

3. Dans `android/app/build.gradle` :

```groovy
apply plugin: "com.google.gms.google-services"
```

4. Dans `android/app/src/main/AndroidManifest.xml` :

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

### 6.3 iOS

1. Ajoutez `GoogleService-Info.plist` à la cible de l'app depuis Xcode (glisser-déposer avec « Copy items if needed »). Le copier dans le dossier ne suffit pas.
2. Dans `ios/Podfile`, Firebase doit être compilé en framework statique :

```ruby
use_frameworks! :linkage => :static
$RNFirebaseAsStaticFramework = true
```

3. Dans `AppDelegate.swift` :

```swift
import FirebaseCore

// dans application(_:didFinishLaunchingWithOptions:)
FirebaseApp.configure()
```

4. Installez les pods, puis ajoutez dans Xcode les capacités Push Notifications et Background Modes → Remote notifications :

```bash
cd ios && pod install
```

### 6.4 Handler d'arrière-plan

Il s'enregistre dans `index.js`, avant `AppRegistry.registerComponent` et en dehors de tout composant :

```js
import { AppRegistry } from 'react-native';
import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

setBackgroundMessageHandler(getMessaging(), async (remoteMessage) => {
  // Traitement léger : synchronisation, badge…
});

AppRegistry.registerComponent(appName, () => App);
```

Les exemples utilisent l'API modulaire (`getMessaging()`, `getToken(messaging)`…). L'ancienne syntaxe `messaging().getToken()` est dépréciée dans les versions récentes de React Native Firebase.

### 6.5 Permission, token et écoute des messages

```js
import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import {
  getMessaging,
  requestPermission,
  getToken,
  onTokenRefresh,
  onMessage,
  onNotificationOpenedApp,
  getInitialNotification,
  AuthorizationStatus,
} from '@react-native-firebase/messaging';

async function askPermission(messaging) {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    return result === PermissionsAndroid.RESULTS.GRANTED;
  }
  const status = await requestPermission(messaging);
  return (
    status === AuthorizationStatus.AUTHORIZED ||
    status === AuthorizationStatus.PROVISIONAL
  );
}

export function usePushNotifications(onOpen) {
  useEffect(() => {
    const messaging = getMessaging();
    const unsubscribers = [];

    (async () => {
      if (!(await askPermission(messaging))) return;

      await sendTokenToBackend(await getToken(messaging));
      unsubscribers.push(onTokenRefresh(messaging, sendTokenToBackend));

      // Premier plan : afficher soi-même (voir 6.6)
      unsubscribers.push(onMessage(messaging, displayForegroundNotification));

      // Clic : app en arrière-plan
      unsubscribers.push(
        onNotificationOpenedApp(messaging, (m) => onOpen(m.data)),
      );

      // Clic : app fermée
      const initial = await getInitialNotification(messaging);
      if (initial) onOpen(initial.data);
    })();

    return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
  }, [onOpen]);
}

async function sendTokenToBackend(token) {
  // POST /devices { token, platform: Platform.OS, userId }
}
```

### 6.6 Afficher les notifications au premier plan

Comme avec Flutter, rien ne s'affiche quand l'app est ouverte. On utilise généralement Notifee pour ça :

```bash
npm install @notifee/react-native
```

```js
import notifee, { AndroidImportance } from '@notifee/react-native';

export async function displayForegroundNotification(remoteMessage) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Notifications',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: remoteMessage.notification?.title,
    body: remoteMessage.notification?.body,
    data: remoteMessage.data,
    android: {
      channelId,
      smallIcon: 'ic_notification',
      pressAction: { id: 'default' },
    },
  });
}
```

On peut appeler `createChannel` à chaque fois : si le canal existe déjà, il est réutilisé.

## 7. React Native avec Expo

Avec Expo, `expo-notifications` gère la permission, le token et l'affichage.

### 7.1 Installation et configuration

```bash
npx expo install expo-notifications expo-device expo-constants
```

Dans `app.json` :

```json
{
  "expo": {
    "android": {
      "package": "com.monentreprise.monapp",
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "bundleIdentifier": "com.monentreprise.monapp"
    },
    "plugins": [
      ["expo-notifications", { "icon": "./assets/notification-icon.png", "color": "#e24a2b" }]
    ]
  }
}
```

Expo Go ne permet plus de tester les push distantes sur Android. Il faut un *development build* :

```bash
npx expo run:android
npx expo run:ios
# ou : eas build --profile development
```

Pour iOS, EAS Build peut générer et stocker la clé APNs pour vous (`eas credentials`).

### 7.2 Enregistrement

```js
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Comportement au premier plan
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function registerForPush() {
  if (!Device.isDevice) return null;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Notifications',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  const { status: existing } = await Notifications.getPermissionsAsync();
  let status = existing;
  if (existing !== 'granted') {
    ({ status } = await Notifications.requestPermissionsAsync());
  }
  if (status !== 'granted') return null;

  const projectId = Constants.expoConfig?.extra?.eas?.projectId;
  const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });
  return token; // ExponentPushToken[...]
}
```

Pour l'envoi, on peut passer par le service push d'Expo avec le token `ExponentPushToken[...]` : un `POST https://exp.host/--/api/v2/push/send`, et Expo s'occupe de FCM et d'APNs.

L'autre option est de récupérer les tokens natifs avec `Notifications.getDevicePushTokenAsync()` et d'envoyer soi-même via FCM (Android) et APNs (iOS).

Pour écouter les interactions :

```js
const received = Notifications.addNotificationReceivedListener((n) => { /* premier plan */ });
const opened = Notifications.addNotificationResponseReceivedListener((r) => {
  const data = r.notification.request.content.data; // navigation
});
// au démontage : received.remove(); opened.remove();
```

## 8. Envoyer des notifications depuis le backend

### 8.1 L'API FCM HTTP v1

L'ancienne API « legacy » (clé serveur) a été arrêtée en 2024. On utilise maintenant HTTP v1, authentifiée par un compte de service. La clé se génère dans la console Firebase : Paramètres du projet → Comptes de service → Générer une nouvelle clé privée.

Ce fichier JSON donne un accès administrateur au projet. Il ne doit pas être commité : passez-le par une variable d'environnement ou un gestionnaire de secrets.

### 8.2 Node.js / NestJS avec firebase-admin

```bash
npm install firebase-admin
```

```ts
import { Injectable, Logger } from '@nestjs/common';
import { cert, initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

@Injectable()
export class PushService {
  private readonly logger = new Logger(PushService.name);
  private readonly messaging = getMessaging(
    initializeApp({
      credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!)),
    }),
  );

  async sendToDevice(token: string, title: string, body: string, data: Record<string, string> = {}) {
    try {
      return await this.messaging.send({
        token,
        notification: { title, body },
        data, // valeurs obligatoirement en string
        android: {
          priority: 'high',
          notification: { channelId: 'high_importance_channel', sound: 'default' },
        },
        apns: {
          payload: { aps: { sound: 'default', badge: 1 } },
        },
      });
    } catch (error: any) {
      if (error?.code === 'messaging/registration-token-not-registered') {
        // Token invalide (app désinstallée…) : le supprimer de la base
        this.logger.warn(`Token expiré supprimé : ${token.slice(0, 12)}…`);
      }
      throw error;
    }
  }

  async sendToMany(tokens: string[], title: string, body: string) {
    // 500 tokens maximum par appel
    const res = await this.messaging.sendEachForMulticast({
      tokens,
      notification: { title, body },
    });
    return res.responses
      .map((r, i) => (r.success ? null : tokens[i]))
      .filter((t): t is string => t !== null); // tokens en échec à nettoyer
  }

  sendToTopic(topic: string, title: string, body: string) {
    return this.messaging.send({ topic, notification: { title, body } });
  }
}
```

### 8.3 Avec curl (pour tester)

```bash
ACCESS_TOKEN=$(gcloud auth print-access-token)

curl -X POST \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  https://fcm.googleapis.com/v1/projects/VOTRE_PROJECT_ID/messages:send \
  -d '{
    "message": {
      "token": "TOKEN_DE_L_APPAREIL",
      "notification": { "title": "Bonjour", "body": "Test depuis curl" },
      "data": { "route": "/commandes/42" }
    }
  }'
```

### 8.4 Messages « data » silencieux sur iOS

Pour réveiller l'app iOS sans afficher de notification, le message doit contenir `content-available` et les bons en-têtes APNs :

```json
{
  "message": {
    "token": "TOKEN",
    "data": { "type": "sync" },
    "apns": {
      "headers": { "apns-push-type": "background", "apns-priority": "5" },
      "payload": { "aps": { "content-available": 1 } }
    }
  }
}
```

iOS limite ces messages à quelques-uns par heure et ne les délivre pas si l'utilisateur a fermé l'app de force. Ils ne conviennent pas à une fonctionnalité critique.

## 9. Tester

Le plus rapide est la console Firebase : Messaging → Nouvelle campagne → Envoyer un message test, avec le token FCM récupéré dans les logs.

Sur le simulateur iOS, un fichier `.apns` permet de simuler une notification sans serveur :

```json
{
  "Simulator Target Bundle": "com.monentreprise.monapp",
  "aps": { "alert": { "title": "Test", "body": "Depuis le simulateur" }, "sound": "default" }
}
```

```bash
xcrun simctl push booted com.monentreprise.monapp notification.apns
```

On peut aussi glisser le fichier sur la fenêtre du simulateur.

Testez chaque plateforme app ouverte, en arrière-plan et fermée : ce sont trois chemins de code différents.

## 10. Problèmes fréquents

1. Rien n'arrive sur iOS : la clé APNs n'est pas importée dans Firebase, ou il manque les capacités Push Notifications / Remote notifications dans Xcode.
2. Rien ne s'affiche quand l'app est ouverte : c'est le comportement normal sur Android. Il faut afficher la notification soi-même (flutter_local_notifications, Notifee, expo-notifications).
3. Un carré blanc à la place de l'icône : l'icône de notification Android doit être blanche sur fond transparent.
4. Pas de son ni de bannière sur Android : le canal a été créé avec une importance trop basse. Un canal ne se modifie plus après sa création, il faut changer son identifiant (ou réinstaller l'app).
5. Plus aucune notification depuis Android 13 : la permission `POST_NOTIFICATIONS` n'est pas déclarée ou pas demandée.
6. Notifications perdues sur certains Android (Xiaomi, Huawei, Oppo…) : leurs optimisations de batterie arrêtent les apps en arrière-plan. Envoyez en priorité `high` et, si besoin, expliquez à l'utilisateur comment exclure l'app de ces optimisations.
7. Des tokens morts en base : supprimez ceux qui renvoient `registration-token-not-registered` et mettez le token à jour à chaque `onTokenRefresh`.
8. Une erreur sur le champ `data` : FCM n'y accepte que des chaînes. Sérialisez les objets en JSON.
