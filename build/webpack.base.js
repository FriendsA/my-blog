const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "../", "index.js"),
    output: {
        path: resolve(__dirname, "../", "dist"),
        assetModuleFilename: 'static/assets/[hash:8][ext][query]',
        filename: 'static/js/[name].[contenthash:8].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: require.resolve('swc-loader'),  // you would put swc-loader
                    options: {
                        jsc: {
                            parser: {
                                syntax: "ecmascript",
                                jsx: true,
                                dynamicImport: true,
                            },
                            transform: {
                                react: {
                                    pragma: 'React.createElement',
                                    pragmaFrag: 'React.Fragment',
                                    throwIfNamespace: true,
                                    development: false,
                                    useBuiltins: false
                                }
                            }
                        }
                    }
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        // options: { sourceMap: true }
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../", "public/index.html"),
            favicon: resolve(__dirname, "../", "public/favicon.ico"),
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name][contenthash:8].bundle.css'
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

