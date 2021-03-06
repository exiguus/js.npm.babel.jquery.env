const path = require('path');
const webpack = require('webpack');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, '../src');

/**
 * Webpack Configuration
 */
module.exports = {
  mode: 'development',
  entry: {
    // vendor: [
    //   'lodash',
    // ],
    bundle: path.join(dirApp, 'index.js'),
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
    ],
  },
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
