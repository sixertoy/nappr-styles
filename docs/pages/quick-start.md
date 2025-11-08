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

## Utilisation

Importez les styles dans votre fichier principal :

```scss
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;
```

## Exemple complet

```scss
// variables.scss
$BODY_FONT_SIZE: 16px !default;
$FONT_SIZES_MAP: (12, 14, 16, 24) !default;
$SPACINGS_MAP: (6, 12, 18, 24) !default;

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
| `$body-width` | `$BODY_WIDTH` |
| `$body-font-size` | `$BODY_FONT_SIZE` |
| `$default-spacing` | `$DEFAULT_SPACING` |
| `$font-sizes-map` | `$FONT_SIZES_MAP` |
| `$spacings-map` | `$SPACINGS_MAP` |
| `$border-style` | `$BORDER_STYLE` |
| `$border-size-map` | `$BORDER_SIZE_MAP` |
| `$border-radius-map` | `$BORDER_RADIUS_MAP` |

### Syntaxe deprecated

```scss
// ❌ Ancienne syntaxe (deprecated)
@import './_variables.scss';
@import '~@nappr/nappr-styles/styles.scss';

// ✅ Nouvelle syntaxe
@use './variables.scss' as *;
@use '@nappr/nappr-styles/styles.scss' as *;
```
