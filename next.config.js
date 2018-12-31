const webpack = require("webpack");
const withSize = require("next-size");
const withTypeScript = require("@zeit/next-typescript");

if (process.env.NODE_ENV !== "production") {
  require("now-env");
}

module.exports = withSize(
  withTypeScript({
    webpack(config) {
      config.plugins.push(
        new webpack.EnvironmentPlugin(["GITHUB_TOKEN", "GITHUB_GQL_ENDPOINT"])
      );
      return config;
    }
  })
);
