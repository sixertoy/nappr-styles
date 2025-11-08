# NAPPR Styles (SASS/CSS)

[Documentation](https://sixertoy.github.io/nappr-styles)

## Install

```bash
yarn add https://github.com/sixertoy/nappr-styles.git#latest
```

## Usage

### Configuration des variables

Créez un fichier `variables.scss` pour personnaliser les variables :

```scss
// Configuration principale
$BODY_FONT_SIZE: 16px !default;
$BODY_WIDTH: 100vw !default;
$DEFAULT_SPACING: 12px !default;

// Tailles de police
$FONT_SIZES_MAP: (11, 12, 14, 16) !default;

// Espacements
$SPACINGS_MAP: (3, 6, 9, 12, 18, 24, 48) !default;

// Dimensions
$DIMENSIONS_MAP: (25, 50, 75, 100) !default;

// Bordures
$BORDER_STYLE: solid !default;
$BORDER_SIZE_MAP: (1, 2, 3) !default;
$BORDER_RADIUS_MAP: (4, 8, 12) !default;
```

### Import dans votre projet

Utilisez la syntaxe moderne `@use` :

```scss
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;
```

## Deprecated

> ⚠️ **Version 1.0.0** : Les éléments suivants ont été supprimés. Veuillez migrer vers la nouvelle API.

### Variables deprecated

Les variables en minuscules ont été remplacées par des variables en MAJUSCULES :

| Ancienne variable (deprecated) | Nouvelle variable |
|-------------------------------|-------------------|
| `$body-width` | `$BODY_WIDTH` |
| `$body-font-size` | `$BODY_FONT_SIZE` |
| `$default-spacing` | `$DEFAULT_SPACING` |
| `$default-font-size` | ❌ Supprimée |
| `$border-style` | `$BORDER_STYLE` |
| `$border-size-map` | `$BORDER_SIZE_MAP` |
| `$border-radius-map` | `$BORDER_RADIUS_MAP` |
| `$line-height-map` | `$LINE_HEIGHT_MAP` |
| `$font-sizes-map` | `$FONT_SIZES_MAP` |
| `$spacings-map` | `$SPACINGS_MAP` |
| `$dimensions-map` | `$DIMENSIONS_MAP` |
| `$rem-baseline` | ❌ Supprimée (utilisez `sass-rem` directement) |
| `$rem-fallback` | ❌ Supprimée (utilisez `sass-rem` directement) |
| `$rem-px-only` | ❌ Supprimée (utilisez `sass-rem` directement) |

### Syntaxe deprecated

L'ancienne syntaxe `@import` n'est plus supportée :

```scss
// ❌ Deprecated
@import './_variables.scss';
@import '~@nappr/nappr-styles/styles.scss';

// ✅ Nouvelle syntaxe
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;
```

### Migration

Pour migrer votre code :

1. **Remplacez toutes les variables** : Utilisez les variables en MAJUSCULES
2. **Remplacez `@import` par `@use`** : Utilisez la syntaxe moderne des modules Sass
3. **Configuration rem** : Si vous utilisiez `$rem-baseline`, `$rem-fallback` ou `$rem-px-only`, configurez directement `sass-rem` dans votre projet
