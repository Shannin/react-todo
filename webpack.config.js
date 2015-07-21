var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  entry: [
    path.resolve(__dirname, 'app/main.jsx'),
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'js/app.js',
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root : __dirname,
  },

  module: {
    loaders: [
      {
        test: /app\/.+.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/app.css')
  ]
};
