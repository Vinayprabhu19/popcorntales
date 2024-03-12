const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    const plugins = [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[contenthash].css' : '[name].css',
            chunkFilename: isProduction ? '[id].[contenthash].css' : '[id].css'
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'src/robots.txt', to: 'robots.txt' },
                    { from: 'src/sitemap.xml', to: 'sitemap.xml' }
                ]
            }
        ),
        new LodashModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ];

    if (!isProduction) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, "/dist"),
            filename: isProduction ? `bundle-[name]-[chunkHash].js` : `bundle-[name]-[hash].js`,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images',
                            },
                        },
                    ],
                },
                {
                    test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                    use: ['file-loader']
                },
                { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
            ]
        },
        plugins,
        devServer: {
            historyApiFallback: true
        }
    };
};
