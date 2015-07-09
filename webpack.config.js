var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, '../app/main.js'),
  output: {
    path: path.resolve(__dirname, '../out/js'),
    filename: 'app.js'
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
        loader: 'style!css!sass?sourceMap'
      }
    ]
  }
};