# 10 Astuces pour Optimiser les Performances de React

L'optimisation des performances est cruciale pour offrir une expérience utilisateur fluide. Voici 10 astuces pratiques pour améliorer les performances de vos applications React.

## 1. Utiliser React.memo()

`React.memo()` mémorise le résultat du rendu d'un composant et évite les re-rendus inutiles :

```jsx
const MyComponent = React.memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});
```

## 2. Utiliser useMemo() pour les calculs coûteux

Mémorisez les valeurs calculées pour éviter les recalculs :

```jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

## 3. Utiliser useCallback() pour les fonctions

Mémorisez les fonctions passées en props :

```jsx
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## 4. Code Splitting avec React.lazy()

Chargez les composants à la demande :

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

## 5. Éviter les objets et tableaux dans le JSX

Créez les objets en dehors du rendu :

```jsx
// ❌ Mauvais
<div style={{ margin: '10px' }} />

// ✅ Bon
const style = { margin: '10px' };
<div style={style} />
```

## 6. Utiliser des clés stables dans les listes

Les clés doivent être uniques et stables :

```jsx
{items.map(item => (
  <Item key={item.id} data={item} />
))}
```

## 7. Optimiser les images

Utilisez des formats modernes (WebP) et le lazy loading :

```jsx
<img src={image} loading="lazy" alt="Description" />
```

## 8. Éviter les re-renders inutiles

Utilisez les DevTools Profiler pour identifier les composants qui se re-rendent trop souvent.

## 9. Virtualiser les longues listes

Utilisez `react-window` ou `react-virtualized` pour les grandes listes :

```jsx
import { FixedSizeList } from 'react-window';
```

## 10. Optimiser le bundle

Analysez votre bundle avec `webpack-bundle-analyzer` et supprimez les dépendances inutiles.

## Conclusion

L'optimisation est un processus continu. Commencez par identifier les goulots d'étranglement avec les outils de développement, puis appliquez ces techniques progressivement.

**Rappel** : Ne prématurez pas l'optimisation. Mesurez d'abord, optimisez ensuite !

---

*Publié le 20 janvier 2024 par Mohamed THIARE*

