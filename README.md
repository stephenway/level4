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

h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p { ... }
```

## Color Function


## Color `gray()`


## Color Hex Alpha


## Color `hwb()`


## Font Variant


## `:matches()`


## `:not()`


## `:any-link`

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
