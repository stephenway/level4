var postcss = require('postcss');

var processors = [
  {
    plugin: require('postcss-custom-properties'),
    namespace: 'properties',
    defaults: {}
  },
  {
    plugin: require('postcss-custom-media'),
    namespace: 'media',
    defaults: {}
  },
  {
    plugin: require('postcss-custom-selectors'),
    namespace: 'selectors',
    defaults: {}
  },
  {
    plugin: require('postcss-color-function'),
    namespace: 'color',
    defaults: {}
  },
  {
    plugin: require('postcss-color-gray'),
    namespace: 'gray',
    defaults: {}
  },
  {
    plugin: require('postcss-color-hex-alpha'),
    namespace: 'hexAlpha',
    defaults: {}
  },
  {
    plugin: require('postcss-color-hwb'),
    namespace: 'hwb',
    defaults: {}
  },
  {
    plugin: require('postcss-font-variant'),
    namespace: 'fontVariant',
    defaults: {}
  },
  {
    plugin: require('postcss-selector-matches'),
    namespace: 'matches',
    defaults: {}
  },
  {
    plugin: require('postcss-selector-not'),
    namespace: 'not',
    defaults: {}
  },
  {
    plugin: require('postcss-pseudo-class-any-link'),
    namespace: 'anyLink',
    defaults: {}
  },
  {
    plugin: require('postcss-color-rebeccapurple'),
    namespace: 'rebeccapurple',
    defaults: {}
  },
  {
    plugin: require('postcss-media-minmax'),
    namespace: 'mediaMinmax',
    defaults: {}
  }
];

module.exports = postcss.plugin('level4', function (options) {
  options = options || {};

  var instance = postcss();

  processors.forEach(function (processor) {
    var namespaceOptions = processor.namespace in options ? options[processor.namespace] : options;
    var processorOptions = {};

    Object.keys(processor.defaults).forEach(function (key) {
      processorOptions[key] = processor.defaults[key];
    });

    Object.keys(namespaceOptions).forEach(function (key) {
      processorOptions[key] = namespaceOptions[key];
    });

    if (namespaceOptions && !processorOptions.disable) {
      instance.use(processor.plugin(processorOptions));
    }
  });

  return instance;
});
