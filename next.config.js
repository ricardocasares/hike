const withSize = require("next-size");
const withTypeScript = require("@zeit/next-typescript");

module.exports = withSize(
  withTypeScript({
    webpack(config, options) {
      config.resolve.alias = {
        "@app": __dirname
      };

      return config;
    }
  })
);
