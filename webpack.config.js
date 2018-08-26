const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	entry: {
		polyfills: './src/polyfills.js',
		index: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: 'babel-loader'
			}, {
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					// 'postcss-loader',
					'sass-loader',
				],
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new webpack.ProvidePlugin({
			_: 'lodash'
		}),
		new HtmlWebpackPlugin({
			template: `${__dirname  }/src/index.html`,
			title: 'Output Management',
			filename: 'index.html'
		})
	]
};
