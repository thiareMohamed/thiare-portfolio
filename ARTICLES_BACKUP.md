# 📚 Sauvegarde et Gestion des Articles

## ✅ Vos articles sont en sécurité !

**Bonne nouvelle :** Vos articles dans `public/articles/` sont **automatiquement préservés** lors du build grâce à Create React App.

## Comment ça fonctionne ?

### Create React App et le dossier `public/`

Create React App copie **automatiquement** tout le contenu du dossier `public/` dans le dossier `build/` lors de la commande `npm run build`.

```
public/
  └── articles/
      ├── mon-article-1.md
      ├── mon-article-2.md
      └── ...

↓ npm run build ↓

build/
  └── articles/          ← Copié automatiquement !
      ├── mon-article-1.md
      ├── mon-article-2.md
      └── ...
```

### Vos articles sont préservés car :

1. ✅ Ils sont dans `public/articles/` (pas dans `src/`)
2. ✅ Create React App copie tout `public/` dans `build/`
3. ✅ Ils sont servis comme fichiers statiques
4. ✅ Ils sont versionnés avec Git (si vous utilisez Git)

## 📦 Structure recommandée

```
thiare-portfolio/
├── public/
│   └── articles/              ← Vos articles ici (PRÉSERVÉS)
│       ├── article-1.md
│       ├── article-2.md
│       └── ...
├── src/
│   └── assets/
│       └── data/
│           └── articles.js    ← Métadonnées des articles
└── build/                      ← Généré lors du build
    └── articles/               ← Copié automatiquement depuis public/
```

## 🔒 Bonnes pratiques pour ne jamais perdre vos articles

### 1. Utiliser Git (Recommandé)

Si vous utilisez Git, vos articles sont automatiquement sauvegardés :

```bash
# Vérifier que les articles sont suivis
git status public/articles/

# Ajouter les nouveaux articles
git add public/articles/mon-nouvel-article.md
git commit -m "Ajout d'un nouvel article"
git push
```

### 2. Backup manuel (Optionnel)

Pour une sécurité supplémentaire, vous pouvez créer un script de backup :

```bash
# Créer un dossier de backup
mkdir -p backups/articles

# Copier les articles
cp -r public/articles/* backups/articles/
```

### 3. Sauvegarde cloud

- **GitHub/GitLab** : Vos articles sont sauvegardés si vous poussez votre code
- **Google Drive / Dropbox** : Synchronisez le dossier `public/articles/`
- **Services de backup** : Configurez un backup automatique

## ⚠️ Ce qui pourrait causer une perte de données

### ❌ Ne PAS faire :

1. **Supprimer manuellement** le dossier `public/articles/`
2. **Modifier directement** les fichiers dans `build/` (ils seront écrasés au prochain build)
3. **Ignorer** `public/articles/` dans `.gitignore` (si vous utilisez Git)

### ✅ À faire :

1. **Toujours modifier** les fichiers dans `public/articles/`
2. **Versionner** vos articles avec Git
3. **Tester** après chaque build que les articles sont présents

## 🧪 Vérifier que tout fonctionne

### Après un build :

```bash
# 1. Faire un build
npm run build

# 2. Vérifier que les articles sont dans build/
ls build/articles/

# 3. Vérifier le contenu d'un article
cat build/articles/premiers-pas-avec-react.md
```

### En production :

1. Déployez votre site
2. Visitez `https://votre-site.com/articles/premiers-pas-avec-react.md`
3. Vous devriez voir le contenu markdown

## 📝 Workflow recommandé

### Ajouter un nouvel article :

1. **Créer le fichier** dans `public/articles/mon-article.md`
2. **Ajouter les métadonnées** dans `src/assets/data/articles.js`
3. **Tester localement** : `npm start`
4. **Versionner** : `git add public/articles/mon-article.md && git commit`
5. **Build** : `npm run build` (les articles sont copiés automatiquement)
6. **Déployer** : Votre article est en ligne !

## 🔄 Migration ou Restauration

### Si vous avez perdu des articles :

1. **Depuis Git** :
   ```bash
   git checkout HEAD -- public/articles/
   ```

2. **Depuis un backup** :
   ```bash
   cp -r backups/articles/* public/articles/
   ```

3. **Depuis le build précédent** :
   ```bash
   cp -r build/articles/* public/articles/
   ```

## 📊 Statistiques

Pour voir combien d'articles vous avez :

```bash
# Compter les articles
ls -1 public/articles/*.md | wc -l

# Lister tous les articles
ls -1 public/articles/
```

## 🚀 Déploiement

### Vercel / Netlify

Ces plateformes :
- ✅ Copient automatiquement `public/` dans le build
- ✅ Servent les fichiers statiques correctement
- ✅ Préservent vos articles

### Autres plateformes

Assurez-vous que :
- Le dossier `build/` est déployé
- Les fichiers statiques sont servis correctement
- Le dossier `articles/` est accessible

## 💡 Astuce Pro

Créez un script dans `package.json` pour vérifier vos articles :

```json
{
  "scripts": {
    "check-articles": "echo 'Articles:' && ls -1 public/articles/*.md | wc -l && echo 'fichiers trouvés'"
  }
}
```

Puis exécutez : `npm run check-articles`

---

## ✅ Résumé

**Vos articles sont en sécurité car :**
- ✅ Ils sont dans `public/articles/` (copiés automatiquement)
- ✅ Ils sont servis comme fichiers statiques
- ✅ Ils peuvent être versionnés avec Git
- ✅ Ils sont préservés lors de chaque build

**Pour être encore plus sûr :**
- 📦 Utilisez Git pour versionner vos articles
- 💾 Faites des backups réguliers
- ✅ Testez après chaque build

**Vous ne perdrez jamais vos articles si vous suivez ces pratiques !** 🎉

