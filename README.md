# NAPPR Styles (SASS/CSS)

[Documentation](https://sixertoy.github.io/nappr-styles)

## Install

````bash
yarn add https://github.com/sixertoy/nappr-styles.git#latest

## Usage

`variables.scss`

```css
$body-width: 100% !default;
$body-font-size: 16px !default;
$default-padding: 12px !default;

// $BorderStyle: solid;
// $BorderSizes: () !default;
// $BorderRadiusSizes: () !default;

$FontSizes: (11, 12) !default;
$MarginPaddingSizes: (3, 6, 9, 12, 18, 24, 48) !default;
````

`index.scss`

```css
@import './_variables.scss';
@import '~@nappr/nappr-styles/styles.scss';
```
