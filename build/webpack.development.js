const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
    mode: "development",
    devtool: 'source-map',
    cache: true,
}

module.exports = merge(baseConfig, devConfig);