const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
     entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: process.env.production ? `bundle-[name]-[chunkHash].js` : `bundle-[name]-[hash].js`,
        publicPath: '/'
    },
    module: {
        rules: [{
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
				MiniCssExtractPlugin.loader, // instead of style-loader
				'css-loader'
			  ]
			},
            {
                test: /\.(png|jpg|gif|xml|txt|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Keep the original file name
                            outputPath: 'assets', // Output directory for files
                        }
                    }
                ]
            },
		{
         test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
         use: ['file-loader']
       },
       { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
        ]
    },
    plugins: [
		new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
          hash: true,
          filename: "index.html",  //target html
          template: "./src/index.html", //source html
      }),
		 new MiniCssExtractPlugin({
		 filename: '[name].[contenthash].css',
		 chunkFilename: '[id].[contenthash].css'
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
    ]
}