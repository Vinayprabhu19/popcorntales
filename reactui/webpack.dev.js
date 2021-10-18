const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
 module.exports =
	 merge(common, {
   mode: 'production',
	devServer: {
    historyApiFallback: true
	},
	plugins:[
		new BundleAnalyzerPlugin({
			excludeAssets:'/.*\.hot-update\.js/'
		}),
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true,
      }),
	],
 })
