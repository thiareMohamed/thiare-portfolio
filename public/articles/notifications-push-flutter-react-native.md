# Notifications push sur Android et iOS : le guide complet pour Flutter et React Native

Les notifications push font partie des fonctionnalités qu'on croit simples jusqu'au moment de les brancher : une clé Apple au mauvais endroit, un canal Android oublié, un token jamais rafraîchi… et plus rien n'arrive. Ce guide reprend toute la chaîne, de la console Apple jusqu'à l'envoi depuis votre backend, pour **Flutter** et **React Native** (CLI et Expo).

## 1. Comprendre l'architecture avant de coder

Une notification push ne part jamais directement de votre serveur vers le téléphone. Elle passe toujours par le service du système :

- **iOS** : APNs (*Apple Push Notification service*)
- **Android** : FCM (*Firebase Cloud Messaging*), intégré aux Google Play Services

Pour éviter de gérer deux intégrations, on utilise en pratique **FCM comme point d'entrée unique** : votre backend parle uniquement à FCM, et FCM relaie vers APNs pour les appareils iOS.

```
Backend ──► FCM (HTTP v1) ──┬──► Android (Play Services)
                            └──► APNs ──► iOS
```

Le flux est toujours le même :

1. L'app demande la permission à l'utilisateur.
2. L'app récupère un **token d'appareil** (FCM token).
3. L'app envoie ce token à **votre backend**, qui le stocke (lié à l'utilisateur et à l'appareil).
4. Le backend envoie un message à FCM en ciblant ce token (ou un *topic*).
5. Le système affiche la notification, ou réveille l'app pour la traiter.

### Message « notification » ou message « data » ?

C'est la distinction qui cause le plus de confusion :

| Type | Contenu | App en arrière-plan / fermée | App au premier plan |
|---|---|---|---|
| **Notification** | `notification: { title, body }` | Affichée automatiquement par le système | **Non affichée** : c'est à vous de le faire |
| **Data** | `data: { ... }` uniquement | Transmise à votre handler en arrière-plan (non garantie sur iOS) | Transmise à votre listener |
| **Mixte** | Les deux | Affichée, `data` disponible au clic | Listener avec les deux |

Retenez surtout : **au premier plan, rien ne s'affiche tout seul sur Android**. Il faut une librairie de notifications locales pour afficher la bannière.

## 2. Prérequis communs

- Un **projet Firebase** (gratuit).
- Un **compte Apple Developer payant** : sans lui, pas de push sur iOS.
- Un **appareil iOS réel** recommandé. Le simulateur reçoit les push distantes depuis Xcode 14 (macOS 13+, Mac Apple Silicon ou T2), mais un vrai iPhone reste la référence pour valider.
- L'**identifiant de bundle iOS** et le **package Android** définitifs de votre app : ils sont liés à la configuration Firebase.

## 3. Configuration Apple (APNs)

C'est l'étape qu'on oublie le plus souvent. Elle se fait une seule fois par compte développeur.

### 3.1 Créer une clé APNs (.p8)

1. Allez sur **developer.apple.com → Certificates, Identifiers & Profiles → Keys**.
2. Cliquez sur **+**, nommez la clé et cochez **Apple Push Notifications service (APNs)**.
3. Téléchargez le fichier `.p8`. **Il n'est téléchargeable qu'une seule fois** : rangez-le dans votre gestionnaire de secrets.
4. Notez le **Key ID** (affiché sur la page de la clé) et votre **Team ID** (en haut à droite du compte).

Préférez la clé `.p8` aux anciens certificats `.p12` : elle n'expire pas, fonctionne pour tous vos apps et couvre à la fois les environnements de développement et de production.

### 3.2 Activer la capacité Push sur l'App ID

Dans **Identifiers**, ouvrez l'App ID de votre application et vérifiez que **Push Notifications** est cochée. Avec la signature automatique de Xcode, l'ajout de la capacité (voir plus bas) le fait pour vous.

### 3.3 Relier la clé à Firebase

Dans la console Firebase : **Paramètres du projet → Cloud Messaging → Configuration de l'application Apple → Clé d'authentification APNs**. Importez le `.p8` avec le Key ID et le Team ID.

Sans cette étape, l'app iOS obtiendra un token FCM, mais aucun message ne sera jamais délivré.

## 4. Configuration Firebase

1. Dans la console Firebase, ajoutez une **app Android** (avec le package exact, ex. `com.monentreprise.monapp`) et une **app iOS** (avec le bundle ID exact).
2. Récupérez les fichiers de configuration :
   - `google-services.json` pour Android
   - `GoogleService-Info.plist` pour iOS

Avec Flutter, la CLI FlutterFire fait tout ça pour vous (section suivante).

## 5. Flutter

### 5.1 Dépendances et configuration Firebase

```bash
flutter pub add firebase_core firebase_messaging flutter_local_notifications

dart pub global activate flutterfire_cli
flutterfire configure
```

`flutterfire configure` enregistre les apps dans votre projet Firebase et génère `lib/firebase_options.dart`.

### 5.2 Côté iOS (Xcode)

Ouvrez `ios/Runner.xcworkspace` puis, dans **Signing & Capabilities** de la cible Runner :

- ajoutez **Push Notifications** ;
- ajoutez **Background Modes** et cochez **Remote notifications**.

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

L'icône `ic_notification` doit être **blanche sur fond transparent** : Android ignore les couleurs et affiche un carré blanc si l'icône est opaque.

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

Le handler d'arrière-plan doit être une **fonction de premier niveau** (hors de toute classe), annotée pour ne pas être supprimée à la compilation :

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

### 5.5 Un service de notifications complet

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

Quelques points importants :

- **`getAPNSToken()` avant `getToken()` sur iOS** : sinon vous obtiendrez l'erreur `apns-token-not-set` au premier lancement.
- **`onTokenRefresh`** : le token change (réinstallation, restauration, nettoyage des données). Le backend doit toujours avoir la dernière version.
- Sur iOS, `setForegroundNotificationPresentationOptions` suffit pour afficher la bannière au premier plan : inutile de passer par les notifications locales.

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

1. Ajoutez `GoogleService-Info.plist` à la cible de l'app **depuis Xcode** (glisser-déposer avec « Copy items if needed »), pas seulement dans le dossier.
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

4. Installez les pods, puis ajoutez dans Xcode les capacités **Push Notifications** et **Background Modes → Remote notifications** :

```bash
cd ios && pod install
```

### 6.4 Handler d'arrière-plan

Il doit être enregistré **dans `index.js`, avant `AppRegistry`**, en dehors de tout composant :

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

Les exemples utilisent l'**API modulaire** (`getMessaging()`, `getToken(messaging)`…), qui remplace l'ancienne syntaxe `messaging().getToken()` dans les versions récentes de React Native Firebase.

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

Comme avec Flutter, FCM n'affiche rien quand l'app est ouverte. La solution la plus courante est **Notifee** :

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

`createChannel` peut être appelé plusieurs fois sans risque : si le canal existe déjà, il est simplement réutilisé.

## 7. React Native avec Expo

Avec Expo, `expo-notifications` gère à la fois la permission, le token et l'affichage.

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

**Attention : Expo Go ne permet plus de tester les push distantes sur Android.** Il faut un *development build* :

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

Deux options pour l'envoi :

- **Expo Push Service** avec le token `ExponentPushToken[...]` : un simple `POST https://exp.host/--/api/v2/push/send`, Expo se charge de FCM et APNs.
- **Tokens natifs** via `Notifications.getDevicePushTokenAsync()` : vous envoyez vous-même via FCM (Android) et APNs (iOS).

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

L'ancienne API « legacy » (clé serveur) a été **arrêtée en 2024**. Il faut désormais utiliser **HTTP v1**, authentifiée par un **compte de service** :

**Console Firebase → Paramètres du projet → Comptes de service → Générer une nouvelle clé privée.**

Ce fichier JSON donne un accès administrateur à votre projet : ne le commitez jamais, injectez-le via vos variables d'environnement ou un gestionnaire de secrets.

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

iOS **limite fortement** ces messages (quelques-uns par heure) et ne les délivre pas si l'utilisateur a forcé la fermeture de l'app. Ne bâtissez jamais une fonctionnalité critique dessus.

## 9. Tester efficacement

- **Console Firebase → Messaging → Nouvelle campagne → Envoyer un message test** : collez le token FCM affiché dans vos logs.
- **Simulateur iOS** : vous pouvez simuler une notification sans serveur avec un fichier `.apns` :

```json
{
  "Simulator Target Bundle": "com.monentreprise.monapp",
  "aps": { "alert": { "title": "Test", "body": "Depuis le simulateur" }, "sound": "default" }
}
```

```bash
xcrun simctl push booted com.monentreprise.monapp notification.apns
```

(ou glissez simplement le fichier sur la fenêtre du simulateur).

- Testez les **trois états** pour chaque plateforme : app au premier plan, en arrière-plan, et complètement fermée. Chacun passe par un chemin de code différent.

## 10. Les pièges les plus fréquents

1. **Rien n'arrive sur iOS** : la clé APNs n'est pas importée dans Firebase, ou les capacités *Push Notifications* / *Remote notifications* manquent dans Xcode.
2. **Rien ne s'affiche quand l'app est ouverte** : comportement normal sur Android. Affichez la notification vous-même (flutter_local_notifications, Notifee, expo-notifications).
3. **Carré blanc à la place de l'icône** : l'icône de notification Android doit être monochrome blanche sur fond transparent.
4. **Pas de son ni de bannière sur Android** : le canal a été créé avec une importance trop basse. Un canal ne peut plus être modifié après sa création : changez son identifiant ou demandez à l'utilisateur de réinstaller.
5. **Plus aucune notification après une mise à jour Android 13** : la permission `POST_NOTIFICATIONS` n'est ni déclarée ni demandée.
6. **Notifications perdues sur certains Android** (Xiaomi, Huawei, Oppo…) : leurs optimisations de batterie tuent les apps en arrière-plan. Envoyez en priorité `high` et guidez l'utilisateur vers les réglages de batterie si nécessaire.
7. **Tokens fantômes en base** : supprimez les tokens qui renvoient `registration-token-not-registered`, et mettez à jour le token à chaque `onTokenRefresh`.
8. **Valeurs `data` non textuelles** : FCM n'accepte que des chaînes dans `data`. Sérialisez vos objets en JSON.

## Conclusion

Une fois la chaîne comprise, la configuration devient mécanique : **clé APNs → Firebase → permission → token → backend → FCM HTTP v1**. Isolez toute la logique dans un service dédié côté mobile et côté serveur, traitez systématiquement les trois états de l'app, et gardez votre base de tokens propre : vos notifications arriveront de façon fiable sur Android comme sur iOS.
