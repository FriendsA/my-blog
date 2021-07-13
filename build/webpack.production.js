const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const proConfig = {
    mode: "production",
    devtool: false,
}

module.exports = merge(baseConfig, proConfig);