const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const resolve = require("path").resolve;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const proConfig = {
    mode: "production",
    devtool: false,
    output: {
        path: resolve(__dirname, "../", "dist"),
        assetModuleFilename: 'static/assets/[hash:8][ext][query]',
        filename: 'static/js/[name].[contenthash:8].bundle.js',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name][contenthash:8].bundle.css',
            chunkFilename: 'static/css/[name][contenthash:8].chunk.css',
        }),
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
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

module.exports = merge(baseConfig, proConfig);