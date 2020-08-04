const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"
	  },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].[contentHash].bundle.js"
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
            test: /\.(png|jpg|gif|xml|txt)$/,
            use: [
                {
                    loader: 'file-loader'
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
	devServer: {
    historyApiFallback: true
	},
	optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
	},
    plugins: [
	new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
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
			)
		]
}