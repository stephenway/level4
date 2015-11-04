# level4 [![Travis Build Status][travis-img]][travis]

<img src="giticon.png" title="level4" align="right" width="95"
height="95">

Use W3C CSS Level 4 Modules Today with PostCSS. Take advantage of future
techniques like variables, custom selectors, color functions, and new pseudo
selectors.

## Install
```shell
npm i --save-dev level4
```

## Usage
```shell
var fs = require('fs');
var postcss = require('postcss');
var contrast = require('level4');

var css = fs.readFileSync('input.css', 'utf8');

var output = postcss()
  .use(level4())
  .process(css)
  .css;
```

## Custom Properties
Transform `var()` functions to compatible values.

```css
:root {
  --color: green;
}

div {
  color: var(--color);
}

/* compiles to */

div {
  color: green;
}
```

## Custom Media

Define reusable media queries. Used with [media minmax](#media-minmax) you can
write some beautiful media queries.

```css
@custom-media --name (width >= 10em) and (width <= 40em);

@media (--name) { ... }

/* compiles to */

@media screen and (min-width: 10em) and (max-width: 40em) { ... }
```

## Custom Selectors

Define reusable custom selectors.

```css
@custom-selector :--headings h1, h2, h3, h4, h5, h6;

:--headings + p { ... }

/* compiles to */

h1 + p,
h2 + p,
h3 + p,
h4 + p,
h5 + p,
h6 + p { ... }
```

## Color Function

Transform color values at will. See everything you can do with this in
[interface](https://github.com/postcss/postcss-color-function#interface-according-to-css-specs)

```css
div {
  color: color(green a(90%));
}

/* compiles to */

div {
  color: rgba(0, 128, 0, 0.9);
}
```

## Color `gray()`

Transform `gray()` function to `rgba()` equivalent.

```css
div {
  background: gray(255, 50%);
  color: gray(0);
}

/* compiles to */

div {
  background: rgba(255, 255, 255, 0.5);
  color: rgb(0, 0, 0);
}
```

## Color Hex Alpha

Transform `#RRGGBBAA` or `#RGBA` to `rgba()`.

```css
div {
  background: #9823f834;
  color: #9d9c;
}

/* compiles to */

div {
  background: rgba(152, 35, 248, 0.20392);
  color: rgba(153, 221, 153, 0.8);
}
```

## Color `hwb()`

Transform `hwb()` colors to `rgba()`.

```css
div {
  background: hwb(90, 0%, 0%, .5);
  color: hwb(190, 50%, 0%);
}

/* compiles to */

div {
  background: rgba(128, 255, 0, 0.5);
  color: rgb(128, 234, 255);
}
```


## Font Variant

Transforms `font-variant-*` property to the more supported
`font-feature-settings`.

```css
h1 {
  font-variant-caps: small-caps;
}

table {
  font-variant-numeric: lining-nums;
}

/* compiles to */

h1 {
  font-feature-settings: "c2sc";
  font-variant-caps: small-caps;
}

table {
  font-feature-settings: "lnum";
  font-variant-numeric: lining-nums;
}
```

## `:matches()`

Simplifies `:matches()` pseudo selectors.

```css
li:matches(:last-child, .fancy) { ... }

/* compiles to */

li:last-child, li.fancy { ... }
```

## `:not()`

Transforms level 4 `:not()` to a level 3 selector.

```css
li:not(:last-child, .fancy) { ... }

/* compiles to */

li:not(:last-child):not(.fancy) { ... }
```

## `:any-link`

Transforms `:any-link` to `:link` and `:visited`.

```css
a:any-link { ... }

/* compiles to */

a:link,a:visited { ... }
```

## Media Minmax
Transform `>=`/`<=` operators into working `min-`/`max-` prefixes.

```css
@media screen and (width >= 10em) and (width <= 40em) { ... }

/* compiles to */

@media screen and (min-width: 10em) and (max-width: 40em) { ... }
```

You can also combine this with [custom-media](#custom-media).

## Plugins
A collection of plugins that power level4 with reference to the drafts they
support..

* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) for [css-variables](http://www.w3.org/TR/css-variables/)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media) for [mediaqueries/custom-mq](https://drafts.csswg.org/mediaqueries/#custom-mq)
* [postcss-custom-selectors](https://github.com/postcss/postcss-custom-selectors) for [css-extensions/custom-selectors](https://drafts.csswg.org/css-extensions/#custom-selectors)
* [postcss-color-function](https://github.com/postcss/postcss-color-function) for [css-color/modifying-colors](https://drafts.csswg.org/css-color/#modifying-colors)
* [postcss-color-gray](https://github.com/postcss/postcss-color-gray) for [css-color/grays](https://drafts.csswg.org/css-color/#grays)
* [postcss-color-hex-alpha](https://github.com/postcss/postcss-color-hex-alpha) for [css-color/hex-notation](https://drafts.csswg.org/css-color/#hex-notation)
* [postcss-color-hwb](https://github.com/postcss/postcss-color-hwb) for [css-color/the-hwb-notation](https://drafts.csswg.org/css-color/#the-hwb-notation)
* [postcss-font-variant](https://github.com/postcss/postcss-font-variant) for [css-fonts/propdef-font-variant](https://drafts.csswg.org/css-fonts/#propdef-font-variant)
* [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches) for [selectors-4/matches](https://drafts.csswg.org/selectors-4/#matches)
* [postcss-selector-not](https://github.com/postcss/postcss-selector-not) for [selectors-4/negation](https://drafts.csswg.org/selectors-4/#negation)
* [postcss-pseudo-class-any-link](https://github.com/jonathantneal/postcss-pseudo-class-any-link) for [selectors4/the-any-link-pseudo](http://www.w3.org/TR/selectors4/#the-any-link-pseudo)
* [postcss-color-rebeccapurple](https://github.com/postcss/postcss-color-rebeccapurple) for [css-color/valdef-color-rebeccapurple](https://drafts.csswg.org/css-color/#valdef-color-rebeccapurple)
* [postcss-media-minmax](https://github.com/postcss/postcss-media-minmax) for [mediaqueries/mq-min-max](https://drafts.csswg.org/mediaqueries/#mq-min-max)

## Contributing

Make a branch, `npm test` often, submit a new pull when it passes.

``` shell
git clone https://github.com/stephenway/level4.git
git checkout -b patch-1
npm i
npm test
```

## Resources

* [License](LICENSE)
* [Releases](https://github.com/stephenway/level4/releases)

[travis-img]: https://img.shields.io/travis/stephenway/level4.svg?label=unix
[travis]: https://travis-ci.org/stephenway/level4
