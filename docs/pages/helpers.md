## Font Size

> Les tailles des fonts sont à définir par la variable sass `$FontSizes`

```css
$FontSizes: (6, 8, 9, 12, 26, 24);
```

**Example en utilisant classe `.fs24`**

```html
<span class="fs24">Font size: 24px</span>
```

## Margin / Padding

> Les tailles des margin/padding sont à définir par la variable sass `$MarginPaddingSizes`

```css
$MarginPadding: (6, 8, 9, 12, 26, 24);
```

> Il est alors possible d'ajouter du margin/padding sur :
>
> - la totalité d'un bloc `.m(n)`
> - les 2 axes `.my(n) .mx(n)`
> - les 4 directions `.mt(n), .mr(n), .mb(n), .ml(n)`

**L'example ci-dessous ajoute un padding de 24px sur la position top d'un bloc**

```html
<div class="pt24">padding-top: 24px;</div>
```

## Borders

> Le type de bordure est à définir par la variable `$BorderStyle`
> Les tailles des bordures sont à définir par la variable sass `$BorderSizes`

```css
$BorderStyle: solid;
$BorderSizes: (1, 2, 3);
```

> Il est alors possible d'ajouter des bordures sur :
>
> - la totalité d'un bloc `.b(n)`
> - les 2 axes `.bx(n) .by(n)`
> - les 4 directions `.bt(n), .br(n), .bb(n), .bl(n)`

**L'example ci-dessous ajoute une bordure de 2px sur les positions top et bottom d'un bloc**

```html
<div class="by2" style="border-color: #CCCCCCCC;">
  <span>Lorem ipsum</span>
</div>
```

## Border Radius

> Les arrondis de bordures sont à définir par la variable sass `$BorderRadiusSizes`.

```css
$BorderRadiusSizes: (2, 3, 4, 8, 10, 12);
```

> Il est alors possible d'ajouter des angles arrondis à un bloc sur :
>
> - la totalité d'un bloc `.rd(n)`
> - les 2 axes `.rdx(n) .rdy(n)`
> - les 4 directions `.rdt(n), .rdr(n), .rd(n), .rdl(n)`

**L'example ci-dessous ajoute une bordure de 2px sur les positions top et bottom d'un bloc**

```html
<div class="rdx2" style="border-color: #CCCCCC;">
  <span>Lorem ipsum</span>
</div>
```
