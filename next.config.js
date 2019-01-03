const webpack = require("webpack");
const withSize = require("next-size");
const withTypeScript = require("@zeit/next-typescript");

module.exports = withSize(withTypeScript());
