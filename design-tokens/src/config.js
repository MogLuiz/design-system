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
    },
  };
}

module.exports = {
  registerConfig,
};
