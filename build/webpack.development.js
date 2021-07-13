const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const devConfig = {
    mode: "development",
    devtool: 'eval',
    cache: true,
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
    ],
    devServer: {
        quiet: true,
    },
}
const m = merge(baseConfig, devConfig);
module.exports = m;