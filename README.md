# Napper Styles (SASS/CSS)

## Install

```bash
yarn add https://github.com/sixertoy/napper-styles.git#latest
```

## Usage

`variables.js`

```css
$body-width: 100% !default;
$body-font-size: 16px !default;
$default-padding: 12px !default;

// $BorderStyle: solid;
// $BorderSizes: () !default;
// $BorderRadiusSizes: () !default;

$FontSizes: (11, 12) !default;
$MarginPaddingSizes: (3, 6, 9, 12, 18, 24, 48) !default;
```

`index.js`

```css
@import './_variables.scss';
@import '~@iziges/napper-styles/styles.scss';
```
