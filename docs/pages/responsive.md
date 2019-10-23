# Responsive

## Flexbox Layouts

#### .flex-start

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-start">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .flex-center

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-center">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .flex-end

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-end">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

## Flexbox Spacing

#### .flex-evenly

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-evenly">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .flex-around

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-around">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .flex-between

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-between">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .flex-justify

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-justify">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

## Items Layouts

#### .items-start

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-between items-start is-full-height">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .items-center

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-between items-center is-full-height">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

#### .items-end

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="flex-columns flex-between items-end is-full-height">
      <div class="text-center p12" style="background-color:#40D4C7;">A</div>
      <div class="text-center p12" style="background-color:#DB8C62;">B</div>
      <div class="text-center p12" style="background-color:#5DB0D7;">C</div>
    </div>
  </div>
</pre>

## Grid Columns

#### .col-20

> Tailles disponible en pourcentage
> **.col-100, 80, 75, 66, 50, 40, 33, 25, 20**

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="columns items-center flex-between is-full-height">
      <!-- .col-100, .col-80, .col-75, .col-66, .col-50, .col-40, .col-33, .col-25, .col-20 -->
      <div class="col-20 text-center p12" style="background-color:#40D4C7;">20%</div>
      <div class="col-40 text-center p12" style="background-color:#B9C580;">40%</div>
      <div class="col-20 text-center p12" style="background-color:#DB8C62;">20%</div>
      <div class="col-20 text-center p12" style="background-color:#5DB0D7;">20%</div>
    </div>
  </div>
</pre>

#### .col-1of3

> Tailles semantiques disponible
> **.col-1of1, .col-(n2)of2, .col-(n3)of3, .col-(n4)of4, .col-(n5)of5**

<pre class="docsify-example">
  <div style="height: 144px;border:1px solid #CCC;">
    <div class="columns items-center flex-between is-full-height">
    <!-- .col-1of1, .col-1of2, .col-1of3, .col-1of4, .col-1of5 -->
      <div class="col-1of4 text-center p12" style="background-color:#40D4C7;">.col-1of4</div>
      <div class="col-2of4 text-center p12" style="background-color:#DB8C62;">.col-2of4</div>
      <div class="col-1of4 text-center p12" style="background-color:#B9C580;">.col-1of4</div>
    </div>
  </div>
</pre>
