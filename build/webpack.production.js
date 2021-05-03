const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const baseConfig = require("./webpack.base");

const proConfig = {
    mode: "production",
}

module.exports = merge(baseConfig, proConfig);