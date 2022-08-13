const replace = require("rollup-plugin-replace");
const pkg = require('./package.json');

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      replace({
        __VERSION__: `${pkg.version}`
      })
    )
    return config; // always return a config.
  },
};
