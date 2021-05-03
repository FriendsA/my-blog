const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "../", "index.js"),
    output: {
        path: resolve(__dirname, "../", "dist"),
        filename: 'static/js/[name][contenthash:8].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: resolve(__dirname, "../", "public/index.html") }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name][contenthash:8].bundle.css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
}

