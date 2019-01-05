const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['react', 'react-dom', './src/index.tsx'],
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'distr'),
		publicPath: '',
	},
	plugins: [
		new CleanWebpackPlugin(['./dist', './distr']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [{
			test: /\.(scss|css)$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
			exclude: /icons/,
			use: ['file-loader'],
		},
		{
			test: /\.svg(\?\S*)?$/,
			use: ['file-loader'],
		},
		{
			test: /\.(gif|jpg|png|ico)(\?\S*)?$/,
			use: ['url-loader'],
		},
		{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
		{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'source-map-loader',
		}],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json', '/index.tsx', '/index.ts', '.jsx'],
	},
	devServer: {
		historyApiFallback: true,
	}
};
