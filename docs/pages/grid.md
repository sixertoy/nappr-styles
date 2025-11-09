# Grille CSS Grid

> Système de grille responsive basé sur CSS Grid avec 12 colonnes et des gouttières personnalisables

## Introduction

Le système de grille utilise CSS Grid pour créer des layouts flexibles et responsive. La grille est composée de 12 colonnes avec des gouttières (gaps) configurables.

## Container de base

Utilisez la classe `.grid` pour créer un container de grille :

```html
<div class="grid">
  <!-- Vos colonnes ici -->
</div>
```

## Colonnes

### Colonnes de base

Les colonnes sont définies de 1 à 12. Utilisez `.grid-col-{nombre}` pour définir la largeur d'une colonne :

```html
<div class="grid">
  <div class="grid-col-12">12 colonnes (100%)</div>
  <div class="grid-col-6">6 colonnes (50%)</div>
  <div class="grid-col-4">4 colonnes (33.33%)</div>
  <div class="grid-col-3">4 colonnes (25%)</div>
</div>
```

### Colonnes responsive

Le système est mobile-first. Utilisez les préfixes de breakpoint pour définir des colonnes différentes selon la taille d'écran :

- `.grid-col-sm-*` : ≥ 576px (Mobile)
- `.grid-col-md-*` : ≥ 768px (Tablet)
- `.grid-col-lg-*` : ≥ 1024px (Desktop)
- `.grid-col-xl-*` : ≥ 1248px (Desktop Large)

```html
<div class="grid">
  <!-- Mobile: 1 colonne, Tablet: 2 colonnes, Desktop: 3 colonnes -->
  <div class="grid-col-12 grid-col-md-6 grid-col-lg-4">
    Colonne responsive
  </div>
  <div class="grid-col-12 grid-col-md-6 grid-col-lg-4">
    Colonne responsive
  </div>
  <div class="grid-col-12 grid-col-md-12 grid-col-lg-4">
    Colonne responsive
  </div>
</div>
```

## Décalage (Offset)

### Offset vers la droite

Utilisez `.grid-col-offset-{nombre}` pour décaler une colonne vers la droite :

```html
<div class="grid">
  <!-- Colonne de 4 colonnes décalée de 2 colonnes vers la droite -->
  <div class="grid-col-4 grid-col-offset-2">
    Colonne décalée
  </div>
</div>
```

### Offset vers la gauche

Utilisez `.grid-col-offset-{nombre}--right` pour définir où se termine une colonne :

```html
<div class="grid">
  <!-- Colonne qui se termine à la position 9 -->
  <div class="grid-col-4 grid-col-offset-8--right">
    Colonne avec offset right
  </div>
</div>
```

### Exemple : Centrer une colonne

```html
<div class="grid">
  <!-- Colonne de 4 colonnes centrée (offset de 4) -->
  <div class="grid-col-4 grid-col-offset-4">
    Colonne centrée
  </div>
</div>
```

## Gouttières (Gaps)

### Gouttières de base

Définissez l'espacement entre les colonnes avec les classes de gouttières :

- `.grid-gap-none` : Pas de gouttière (0px)
- `.grid-gap-small` : Petite gouttière (6px)
- `.grid-gap-medium` : Gouttière moyenne (12px) - **défaut**
- `.grid-gap-large` : Grande gouttière (24px)
- `.grid-gap-xlarge` : Très grande gouttière (48px)

```html
<div class="grid grid-gap-large">
  <div class="grid-col-6">Colonne 1</div>
  <div class="grid-col-6">Colonne 2</div>
</div>
```

### Gouttières responsive

Les gouttières peuvent être différentes selon les breakpoints :

```html
<div class="grid grid-gap-small grid-gap-md-medium grid-gap-lg-large">
  <div class="grid-col-12 grid-col-md-6">Colonne 1</div>
  <div class="grid-col-12 grid-col-md-6">Colonne 2</div>
</div>
```

## Nombre de colonnes du container

Par défaut, le container utilise 12 colonnes. Vous pouvez changer le nombre de colonnes avec `.grid-cols-{nombre}` :

```html
<!-- Grille avec 6 colonnes -->
<div class="grid grid-cols-6">
  <div class="grid-col-2">2/6</div>
  <div class="grid-col-2">2/6</div>
  <div class="grid-col-2">2/6</div>
</div>
```

### Responsive

```html
<div class="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3 grid-cols-xl-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

## Alignement des items

### Alignement vertical (align-items)

- `.grid-items-top` : Aligne les items en haut
- `.grid-items-middle` : Centre les items verticalement
- `.grid-items-bottom` : Aligne les items en bas
- `.grid-items-stretch` : Étire les items pour remplir (défaut)

```html
<div class="grid grid-items-middle">
  <div class="grid-col-4">Item centré verticalement</div>
  <div class="grid-col-4">Item centré verticalement</div>
</div>
```

### Justification horizontale (justify-items)

- `.grid-justify-start` : Aligne les items à gauche
- `.grid-justify-center` : Centre les items horizontalement
- `.grid-justify-end` : Aligne les items à droite
- `.grid-justify-stretch` : Étire les items pour remplir (défaut)

```html
<div class="grid grid-justify-center">
  <div class="grid-col-4">Item centré horizontalement</div>
</div>
```

### Alignement et justification combinés (place-items)

- `.grid-place-start` : Haut/Gauche
- `.grid-place-center` : Centre
- `.grid-place-end` : Bas/Droite
- `.grid-place-stretch` : Étire

```html
<div class="grid grid-place-center">
  <div class="grid-col-4">Item centré</div>
</div>
```

## Alignement du contenu

### Alignement vertical du contenu (align-content)

- `.grid-content-top` : Aligne le contenu en haut
- `.grid-content-middle` : Centre le contenu verticalement
- `.grid-content-bottom` : Aligne le contenu en bas
- `.grid-content-between` : Espace entre les éléments
- `.grid-content-around` : Espace autour des éléments
- `.grid-content-evenly` : Espace égal autour des éléments
- `.grid-content-stretch` : Étire le contenu

```html
<div class="grid grid-content-middle" style="height: 400px;">
  <div class="grid-col-4">Contenu centré</div>
</div>
```

### Justification horizontale du contenu (justify-content)

- `.grid-justify-content-start` : Aligne le contenu à gauche
- `.grid-justify-content-center` : Centre le contenu horizontalement
- `.grid-justify-content-end` : Aligne le contenu à droite
- `.grid-justify-content-between` : Espace entre les éléments
- `.grid-justify-content-around` : Espace autour des éléments
- `.grid-justify-content-evenly` : Espace égal autour des éléments
- `.grid-justify-content-stretch` : Étire le contenu

```html
<div class="grid grid-justify-content-center">
  <div class="grid-col-4">Contenu centré</div>
</div>
```

## Alignement des items individuels

### Alignement vertical d'un item (align-self)

- `.grid-self-top` : Aligne cet item en haut
- `.grid-self-middle` : Centre cet item verticalement
- `.grid-self-bottom` : Aligne cet item en bas
- `.grid-self-stretch` : Étire cet item

```html
<div class="grid">
  <div class="grid-col-4 grid-self-bottom">
    Cet item est aligné en bas
  </div>
  <div class="grid-col-4 grid-self-middle">
    Cet item est centré
  </div>
</div>
```

### Justification horizontale d'un item (justify-self)

- `.grid-self-justify-start` : Aligne cet item à gauche
- `.grid-self-justify-center` : Centre cet item horizontalement
- `.grid-self-justify-end` : Aligne cet item à droite
- `.grid-self-justify-stretch` : Étire cet item

```html
<div class="grid">
  <div class="grid-col-4 grid-self-justify-end">
    Cet item est aligné à droite
  </div>
</div>
```

### Alignement et justification combinés (place-self)

- `.grid-self-place-start` : Haut/Gauche
- `.grid-self-place-center` : Centre
- `.grid-self-place-end` : Bas/Droite
- `.grid-self-place-stretch` : Étire

```html
<div class="grid">
  <div class="grid-col-4 grid-self-place-center">
    Item centré individuellement
  </div>
</div>
```

## Exemples complets

### Layout classique 3 colonnes

```html
<div class="grid grid-gap-medium">
  <div class="grid-col-12 grid-col-md-4">
    <h2>Colonne 1</h2>
    <p>Contenu de la première colonne</p>
  </div>
  <div class="grid-col-12 grid-col-md-4">
    <h2>Colonne 2</h2>
    <p>Contenu de la deuxième colonne</p>
  </div>
  <div class="grid-col-12 grid-col-md-4">
    <h2>Colonne 3</h2>
    <p>Contenu de la troisième colonne</p>
  </div>
</div>
```

### Layout avec sidebar

```html
<div class="grid grid-gap-large">
  <!-- Sidebar -->
  <aside class="grid-col-12 grid-col-md-3">
    <nav>Menu de navigation</nav>
  </aside>
  
  <!-- Contenu principal -->
  <main class="grid-col-12 grid-col-md-9">
    <article>
      <h1>Titre de l'article</h1>
      <p>Contenu principal...</p>
    </article>
  </main>
</div>
```

### Grille de cartes responsive

```html
<div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-md-3 grid-cols-lg-4 grid-gap-medium">
  <div class="card">Carte 1</div>
  <div class="card">Carte 2</div>
  <div class="card">Carte 3</div>
  <div class="card">Carte 4</div>
  <div class="card">Carte 5</div>
  <div class="card">Carte 6</div>
</div>
```

### Centrer un contenu

```html
<div class="grid grid-items-middle grid-justify-center" style="min-height: 100vh;">
  <div class="grid-col-12 grid-col-md-8 grid-col-lg-6">
    <h1>Contenu centré</h1>
    <p>Ce contenu est centré verticalement et horizontalement</p>
  </div>
</div>
```

## Breakpoints

Les breakpoints utilisés sont :

- **xs** : 320px (Mobile Small)
- **sm** : 576px (Mobile)
- **md** : 768px (Tablet)
- **lg** : 1024px (Desktop)
- **xl** : 1248px (Desktop Extra Large)

## Variables personnalisables

Vous pouvez personnaliser la grille en surchargeant les variables dans votre fichier `variables.scss` :

```scss
// Nombre de colonnes (défaut: 12)
$NAPPR_GRID_COLUMNS: 12 !default;

// Gouttières
$NAPPR_GRID_GAP_DEFAULT: 12px !default;
$NAPPR_GRID_GAP_SMALL: 6px !default;
$NAPPR_GRID_GAP_MEDIUM: 12px !default;
$NAPPR_GRID_GAP_LARGE: 24px !default;
$NAPPR_GRID_GAP_XLARGE: 48px !default;
```
