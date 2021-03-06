const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist';
}

module.exports = {
	mode: mode,
	target: target,

	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[hash][ext]',
	},

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				use: 'asset/resource',
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
		}),
	],

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		static: './dist',
		hot: true,
	},
};
