var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
	entry: "./main.jsx",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
