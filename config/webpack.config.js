var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, '../app/js/main.js'),
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
      }
    ]
  }
};