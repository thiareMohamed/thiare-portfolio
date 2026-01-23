# 📝 Guide du Blog - Comment ajouter des articles

Ce guide vous explique comment ajouter de nouveaux articles à votre blog portfolio.

## Structure des fichiers

```
public/
└── articles/              # Dossier contenant les fichiers markdown (accessible publiquement)
    ├── mon-article.md
    └── ...

src/
├── assets/
│   └── data/
│       └── articles.js    # Métadonnées des articles
└── components/
    ├── BlogList.jsx       # Liste de tous les articles
    └── BlogPost.jsx       # Affichage d'un article individuel
```

## Étapes pour ajouter un nouvel article

### 1. Créer le fichier Markdown

Créez un nouveau fichier `.md` dans le dossier `public/articles/` avec un nom de slug (ex: `mon-nouvel-article.md`).

**Exemple :** `public/articles/astuce-typescript.md`

> **Note :** Si le dossier `public/articles/` n'existe pas, créez-le.

```markdown
# Mon Super Article

Voici le contenu de mon article en **Markdown**.

## Section 1

Du contenu ici...

### Sous-section

Plus de contenu...

## Code

```javascript
const exemple = "Hello World";
console.log(exemple);
```

## Conclusion

C'est tout !
```

### 2. Ajouter les métadonnées

Ouvrez `src/assets/data/articles.js` et ajoutez un nouvel objet dans le tableau `Articles` :

```javascript
{
  id: 4,  // ID unique (incrémentez le dernier ID)
  slug: 'astuce-typescript',  // Même nom que le fichier .md (sans extension)
  title: 'Astuce TypeScript pour Débutants',
  excerpt: 'Découvrez cette astuce pratique pour améliorer votre code TypeScript...',
  author: 'Mohamed THIARE',
  date: '2024-02-01',  // Format YYYY-MM-DD
  readTime: '5 min',  // Temps de lecture estimé
  category: 'TypeScript',  // Catégorie de l'article
  tags: ['TypeScript', 'JavaScript', 'Astuces', 'Débutant'],
  image: 'https://images.unsplash.com/photo-...',  // URL de l'image de couverture
  featured: false  // true pour mettre en vedette
}
```

### 3. Vérifier que tout fonctionne

1. Redémarrez le serveur de développement si nécessaire
2. Naviguez vers la section Blog de votre portfolio
3. Votre nouvel article devrait apparaître dans la liste

## Format Markdown supporté

Le blog utilise `react-markdown` avec le plugin `remark-gfm` qui supporte :

- ✅ Titres (`#`, `##`, `###`)
- ✅ Texte en gras (`**texte**`)
- ✅ Texte en italique (`*texte*`)
- ✅ Listes à puces et numérotées
- ✅ Code inline (`` `code` ``)
- ✅ Blocs de code avec coloration syntaxique (```javascript)
- ✅ Liens (`[texte](url)`)
- ✅ Images (`![alt](url)`)
- ✅ Citations (`> citation`)
- ✅ Tableaux (GitHub Flavored Markdown)
- ✅ Et plus encore !

## Conseils pour écrire de bons articles

### 1. Structure claire
- Utilisez des titres hiérarchiques (`#`, `##`, `###`)
- Organisez le contenu en sections logiques
- Ajoutez une introduction et une conclusion

### 2. Code
- Utilisez des blocs de code avec le nom du langage pour la coloration
- Expliquez le code avec du texte avant/après
- Ajoutez des commentaires dans le code si nécessaire

### 3. Images
- Utilisez des images de qualité
- Optimisez les images avant de les ajouter
- Ajoutez des descriptions alt pour l'accessibilité

### 4. Métadonnées
- Choisissez un slug descriptif et URL-friendly
- Rédigez un excerpt accrocheur (150-200 caractères)
- Utilisez des tags pertinents (3-5 tags maximum)
- Estimez correctement le temps de lecture

## Exemple complet

### Fichier : `src/articles/guide-react-hooks.md`

```markdown
# Guide Complet des React Hooks

Les hooks sont une fonctionnalité puissante de React qui permet d'utiliser l'état et d'autres fonctionnalités dans les composants fonctionnels.

## useState

Le hook `useState` permet de gérer l'état local :

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
    </div>
  );
}
\`\`\`

## useEffect

Le hook `useEffect` permet d'effectuer des effets de bord...

## Conclusion

Les hooks simplifient grandement le développement React moderne.

---

*Publié le 1er février 2024 par Mohamed THIARE*
```

### Métadonnées dans `articles.js`

```javascript
{
  id: 4,
  slug: 'guide-react-hooks',
  title: 'Guide Complet des React Hooks',
  excerpt: 'Découvrez comment utiliser les hooks React pour créer des composants plus puissants et maintenables.',
  author: 'Mohamed THIARE',
  date: '2024-02-01',
  readTime: '10 min',
  category: 'React',
  tags: ['React', 'Hooks', 'JavaScript', 'Tutoriel'],
  image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
  featured: true
}
```

## Personnalisation

### Changer le style des articles

Modifiez les classes CSS dans `src/components/BlogPost.jsx` dans la section `components` de `ReactMarkdown`.

### Ajouter de nouvelles catégories

Les catégories sont automatiquement détectées depuis les articles. Il suffit d'utiliser une nouvelle catégorie dans les métadonnées.

### Images personnalisées

Vous pouvez :
1. Utiliser des URLs d'images externes (Unsplash, etc.)
2. Ajouter vos images dans `public/images/blog/` et utiliser `/images/blog/mon-image.jpg`
3. Utiliser des images dans `src/assets/images/` et les importer

## Troubleshooting

### L'article ne s'affiche pas
- Vérifiez que le slug dans `articles.js` correspond au nom du fichier `.md` (sans extension)
- Vérifiez que le fichier `.md` est bien dans `public/articles/`
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que le serveur de développement est redémarré après avoir ajouté un nouveau fichier

### Le contenu ne se charge pas
- Vérifiez que le fichier markdown est valide
- Vérifiez que le serveur de développement est en cours d'exécution
- Essayez de recharger la page

### Problèmes de formatage
- Vérifiez la syntaxe Markdown
- Assurez-vous que les blocs de code sont correctement formatés avec ```

## Ressources utiles

- [Documentation Markdown](https://www.markdownguide.org/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

---

**Bon blogging ! 🚀**

