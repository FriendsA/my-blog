const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const resolve = require("path").resolve;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const smp = new SpeedMeasurePlugin();

const devConfig = {
    mode: "development",
    devtool: 'eval',
    cache: true,
    output: {
        path: resolve(__dirname, "../", "dist"),
        assetModuleFilename: 'static/assets/[hash:8][ext][query]',
        filename: 'static/js/[name].bundle.js',
        clean: true,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name][contenthash:8].bundle.css',
            chunkFilename: 'static/css/[name][contenthash:8].chunk.css',
        }),
    ],
    devServer: {
        // quiet: true, 控制台静默打印，报错都会不打印
        historyApiFallback: true,
        hot:true,
    },
}
const m = merge(baseConfig, devConfig);
module.exports = m;