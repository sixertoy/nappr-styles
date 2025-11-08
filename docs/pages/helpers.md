## Font Size

> Les tailles des fonts sont à définir par la variable sass `$FONT_SIZES_MAP`

```scss
$FONT_SIZES_MAP: (6, 8, 9, 12, 24, 26) !default;
```

**Exemple en utilisant la classe `.fs24`**

```html
<span class="fs24">Font size: 24px</span>
```

## Margin / Padding

> Les tailles des margin/padding sont à définir par la variable sass `$SPACINGS_MAP`

```scss
$SPACINGS_MAP: (3, 6, 9, 12, 18, 24, 48) !default;
```

> Il est alors possible d'ajouter du margin/padding sur :
>
> - la totalité d'un bloc `.m(n)`
> - les 2 axes `.my(n) .mx(n)`
> - les 4 directions `.mt(n), .mr(n), .mb(n), .ml(n)`

**L'exemple ci-dessous ajoute un padding de 24px sur la position top d'un bloc**

```html
<div class="pt24">padding-top: 24px;</div>
```

## Borders

> Le type de bordure est à définir par la variable `$BORDER_STYLE`
> Les tailles des bordures sont à définir par la variable sass `$BORDER_SIZE_MAP`

```scss
$BORDER_STYLE: solid !default;
$BORDER_SIZE_MAP: (1, 2, 3) !default;
```

> Il est alors possible d'ajouter des bordures sur :
>
> - la totalité d'un bloc `.b(n)`
> - les 2 axes `.bx(n) .by(n)`
> - les 4 directions `.bt(n), .br(n), .bb(n), .bl(n)`

**L'exemple ci-dessous ajoute une bordure de 2px sur les positions top et bottom d'un bloc**

```html
<div class="by2" style="border-color: #CCCCCCCC;">
  <span>Lorem ipsum</span>
</div>
```

## Border Radius

> Les arrondis de bordures sont à définir par la variable sass `$BORDER_RADIUS_MAP`.

```scss
$BORDER_RADIUS_MAP: (2, 3, 4, 8, 10, 12) !default;
```

> Il est alors possible d'ajouter des angles arrondis à un bloc sur :
>
> - la totalité d'un bloc `.brad(n)`
> - les 4 directions `.bradt(n), .bradr(n), .bradb(n), .bradl(n)`

**L'exemple ci-dessous ajoute un angle arrondi de 2px sur le haut d'un bloc**

```html
<div class="bradt2" style="border-color: #CCCCCC;">
  <span>Lorem ipsum</span>
</div>
```

## Deprecated

> ⚠️ **Version 1.0.0** : Les variables suivantes ont été renommées.

| Ancienne variable | Nouvelle variable |
|-------------------|-------------------|
| `$FontSizes` | `$FONT_SIZES_MAP` |
| `$MarginPaddingSizes` | `$SPACINGS_MAP` |
| `$BorderStyle` | `$BORDER_STYLE` |
| `$BorderSizes` | `$BORDER_SIZE_MAP` |
| `$BorderRadiusSizes` | `$BORDER_RADIUS_MAP` |
