const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
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
			}
			/*
			, {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
			*/
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		// new ExtractTextPlugin('css/styles.css'),
		new webpack.ProvidePlugin({
			_: 'lodash'
		}),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			title: 'Output Management',
			filename: 'index.html'
		})
	]
};
