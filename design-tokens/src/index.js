const path = require("path");
const { getBrands } = require("./brand");
const { buildTokens } = require("./build");
const { registerFilter } = require('./config');

registerFilter();

// dist/scss/globals.scss
// dist/scss/marca-a/tema-1/dark.scss

getBrands().map(async function (current) {
  const buildPath = {
    css: path.join("dist", "css", current.dest, path.sep),
    scss: path.join('dist', 'scss', current.dest, path.sep),
  };

  await buildTokens({ current, buildPath });
});
