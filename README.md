# level4
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
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
* [postcss-custom-selectors](https://github.com/postcss/postcss-custom-selectors)
* [postcss-color-function](https://github.com/postcss/postcss-color-function)
* [postcss-color-gray](https://github.com/postcss/postcss-color-gray)
* [postcss-color-hex-alpha](https://github.com/postcss/postcss-color-hex-alpha)
* [postcss-color-hwb](https://github.com/postcss/postcss-color-hwb)
* [postcss-font-variant](https://github.com/postcss/postcss-font-variant)
* [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches)
* [postcss-selector-not](https://github.com/postcss/postcss-selector-not)
* [postcss-pseudo-class-any-link](https://github.com/jonathantneal/postcss-pseudo-class-any-link)
* [postcss-color-rebeccapurple](https://github.com/postcss/postcss-color-rebeccapurple)
* [postcss-color-rgba-fallback](https://github.com/postcss/postcss-color-rgba-fallback)
* [postcss-media-minmax](https://github.com/postcss/postcss-media-minmax) for
  [mediaqueries/mq-min-max](https://drafts.csswg.org/mediaqueries/#mq-min-max)

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
