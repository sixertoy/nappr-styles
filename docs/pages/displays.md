# Display

## Affichage

#### .is-hidden

> Masque un élément dans l'arbre HTML en utilisant les propriétés :
>
> - display: none
> - visibility: hidden

#### .is-visible

> Affiche un élément dans l'arbre HTML en utilisant les propriétés :
>
> - display: inherit
> - visibility: inherit

#### .hide

> Masque complétement un élément dans l'arbre HTML en utilisant les propriétés en affectant toutes ses tailles à 0 (font-size, height, width...)

## Layouts

#### .is-fixed

> Applique la règle `position: fixed` à l'élément

#### .is-relative

> Applique la règle `position: relative` à l'élément

#### .is-absolute

> Applique la règle `position: absolute` à l'élément

## Positionnements

#### .is-top-left

> Place l'élément en haut à gauche d'un bloc en position absolu

<pre class="docsify-example">
  <div class="is-relative" style="min-height:144px;border:1px solid #CCC;min-width:100%;width:100%;height:140px;">
    <div class="is-absolute is-top-left" style="background-color:#000; width:20px;height:20px;" />
  </div>
</pre>

#### .is-top-right

> Place l'élément en haut à droite d'un bloc en position absolu

<pre class="docsify-example">
  <div class="is-relative" style="min-height:144px;border:1px solid #CCC;min-width:100%;width:100%;height:140px;">
    <div class="is-absolute is-top-right" style="background-color:#000; width:20px;height:20px;" />
  </div>
</pre>

#### .is-bottom-right

> Place l'élément en bas à droite d'un bloc en position absolu

<pre class="docsify-example">
  <div class="is-relative" style="min-height:144px;border:1px solid #CCC;min-width:100%;width:100%;height:140px;">
    <div class="is-absolute is-bottom-right" style="background-color:#000; width:20px;height:20px;" />
  </div>
</pre>

#### .is-bottom-left

> Place l'élément en bas à gauche d'un bloc en position absolu

<pre class="docsify-example">
  <div class="is-relative" style="min-height:144px;border:1px solid #CCC;min-width:100%;width:100%;height:140px;">
    <div class="is-absolute is-bottom-left" style="background-color:#000; width:20px;height:20px;" />
  </div>
</pre>

#### .is-top-to-bottom {

top: 0;
bottom: 0;
}

#### .is-left-to-right {

left: 0;
right: 0;
}

## Dimensions

#### .is-full-width

> Force la largeur d'un élément à 100% de la largeur parent

<pre class="docsify-example">
  <div style="height:144px;border:1px solid #CCC;">
    <p class="is-full-width" style="height:60px;background-color: #000000;">&nbsp;</p>
  </div>
</pre>

#### .is-full-height

> Force la hauteur d'un élément à 100% de la largeur parent

<pre class="docsify-example">
  <div style="height:144px;border:1px solid #CCC;">
    <p class="is-full-height" style="width:60px;background-color: #000000;">&nbsp;</p>
  </div>
</pre>

#### .is-full-layout

<pre class="docsify-example">
  <div style="height:144px;border:1px solid #CCC;">
    <p class="is-full-layout" style="margin:auto;background-color: #000000;">&nbsp;</p>
  </div>
</pre>
