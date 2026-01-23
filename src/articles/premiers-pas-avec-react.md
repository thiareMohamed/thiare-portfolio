# Premiers pas avec React : Guide pour débutants

React est l'une des bibliothèques JavaScript les plus populaires pour créer des interfaces utilisateur. Dans cet article, je vais vous guider à travers les concepts fondamentaux de React.

## Qu'est-ce que React ?

React est une bibliothèque JavaScript développée par Facebook (maintenant Meta) qui permet de créer des interfaces utilisateur interactives. Elle utilise un système de composants réutilisables et un DOM virtuel pour optimiser les performances.

## Installation

Pour créer une nouvelle application React, vous pouvez utiliser Create React App :

```bash
npx create-react-app mon-app
cd mon-app
npm start
```

## Les Composants

Les composants sont le cœur de React. Un composant est une fonction ou une classe qui retourne du JSX (JavaScript XML).

### Composant Fonctionnel

```jsx
function Welcome() {
  return <h1>Bonjour, monde !</h1>;
}
```

### Composant avec Props

```jsx
function Welcome({ name }) {
  return <h1>Bonjour, {name} !</h1>;
}
```

## Le State (État)

Le state permet de gérer les données qui changent dans votre composant :

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
```

## Les Hooks

Les hooks sont des fonctions spéciales qui permettent d'utiliser des fonctionnalités React dans les composants fonctionnels :

- `useState` : Pour gérer l'état local
- `useEffect` : Pour les effets de bord (appels API, abonnements, etc.)
- `useContext` : Pour accéder au contexte

## Conclusion

React est un outil puissant pour créer des applications web modernes. Commencez par maîtriser les concepts de base, puis explorez les fonctionnalités avancées.

**Astuce** : Pratiquez régulièrement en créant de petits projets. C'est la meilleure façon d'apprendre !

---

*Publié le 15 janvier 2024 par Mohamed THIARE*

