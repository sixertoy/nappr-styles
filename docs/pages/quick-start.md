# Quick Start

> Guide de démarrage rapide pour utiliser @nappr/nappr-styles

## Installation

```bash
yarn add https://github.com/sixertoy/nappr-styles.git#latest
```

## Configuration

Créez un fichier `variables.scss` pour personnaliser les variables :

```scss
// Configuration principale
$NAPPR_BODY_FONT_SIZE: 16px !default;
$NAPPR_BODY_WIDTH: 100vw !default;
$NAPPR_DEFAULT_SPACING: 12px !default;

// Tailles de police
$NAPPR_FONT_SIZES_MAP: (11, 12, 14, 16) !default;

// Espacements
$NAPPR_SPACINGS_MAP: (3, 6, 9, 12, 18, 24, 48) !default;

// Dimensions
$NAPPR_DIMENSIONS_MAP: (25, 50, 75, 100) !default;

// Bordures
$NAPPR_BORDER_STYLE: solid !default;
$NAPPR_BORDER_SIZE_MAP: (1, 2, 3) !default;
$NAPPR_BORDER_RADIUS_MAP: (4, 8, 12) !default;
```

## Utilisation

Importez les styles dans votre fichier principal :

```scss
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;
```

## Exemple complet

```scss
// variables.scss
$NAPPR_BODY_FONT_SIZE: 16px !default;
$NAPPR_FONT_SIZES_MAP: (12, 14, 16, 24) !default;
$NAPPR_SPACINGS_MAP: (6, 12, 18, 24) !default;

// main.scss
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;

.my-component {
  @extend .fs16;
  @extend .m12;
  @extend .p6;
}
```

## Deprecated

> ⚠️ **Version 1.0.0** : Les éléments suivants ont été supprimés.

### Variables deprecated

| Ancienne variable | Nouvelle variable |
|-------------------|-------------------|
| `$body-width` | `$NAPPR_BODY_WIDTH` |
| `$body-font-size` | `$NAPPR_BODY_FONT_SIZE` |
| `$default-spacing` | `$NAPPR_DEFAULT_SPACING` |
| `$font-sizes-map` | `$NAPPR_FONT_SIZES_MAP` |
| `$spacings-map` | `$NAPPR_SPACINGS_MAP` |
| `$border-style` | `$NAPPR_BORDER_STYLE` |
| `$border-size-map` | `$NAPPR_BORDER_SIZE_MAP` |
| `$border-radius-map` | `$NAPPR_BORDER_RADIUS_MAP` |

### Syntaxe deprecated

```scss
// ❌ Ancienne syntaxe (deprecated)
@import './_variables.scss';
@import '~@nappr/nappr-styles/styles.scss';

// ✅ Nouvelle syntaxe
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;
```

### Grille deprecated

Les anciennes classes `.columns` et `.rows` (basées sur flexbox) ont été supprimées. Utilisez le nouveau système de grille CSS Grid :

```scss
// ❌ Deprecated
.columns .col-50 { ... }

// ✅ Nouvelle syntaxe
.nappr-grid .nappr-grid-col-6 { ... }
```

## Migration

Pour migrer votre code vers la version 1.0.0+ :

1. **Remplacez toutes les variables** : Utilisez les variables en MAJUSCULES préfixées avec `NAPPR_`
2. **Remplacez `@import` par `@use`** : Utilisez la syntaxe moderne des modules Sass
3. **Configuration rem** : Si vous utilisiez `$rem-baseline`, `$rem-fallback` ou `$rem-px-only`, configurez directement `sass-rem` dans votre projet
4. **Migrez vers la nouvelle grille** : Remplacez `.columns`/`.rows` par `.nappr-grid` et `.nappr-grid-col-*`
