var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'js/app.js'
  },

  module: {
    loaders: [
      {
        test: /app\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /app\/.+.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass?sourceMap'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css')
  ]
};
