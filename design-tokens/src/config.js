const StyleDictionaryPackage = require("style-dictionary");

function registerConfig({ current, buildPath }) {
  return {
    source: [current.source],
    platforms: {
      "web/css": {
        transformGroup: "css",
        buildPath: buildPath.css,
        files: [
          {
            destination: `${current.filename}.css`,
            format: "css/variables",
            filter: "notIsObject",
          },
        ],
      },
      "web/scss": {
        transformGroup: "scss",
        buildPath: buildPath.scss,
        files: [
          {
            destination: `${current.filename}.scss`,
            format: "scss/variables",
            filter: "notIsObject",
          },
          {
            destination: `mixins.scss`,
            format: "scss/mixin",
            filter: "isObject",
          },
        ],
      },
    },
  };
}
function registerFilter() {
  StyleDictionaryPackage.registerFilter({
    name: "isObject",
    matcher: function (token) {
      return typeof token.value === "object";
    },
  });

  StyleDictionaryPackage.registerFilter({
    name: "notIsObject",
    matcher: function (token) {
      return typeof token.value !== "object";
    },
  });
}

module.exports = {
  registerConfig,
  registerFilter,
};
