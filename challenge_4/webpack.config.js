const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'client/src/app.jsx'),
	module: {
		rules: [
		{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				}
			}
		}]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/client/dist'
	}
};