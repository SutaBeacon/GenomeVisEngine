const path = require('path');
module.exports = {
  entry: {
    scatter: './scatter.js',
    chords: './chords.js',
    boxplot: './boxplot.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: [
            ['transform-runtime', {
              helpers: false,
              polyfill: false,
              regenerator: true
            }]
          ],
        }
      }
    }]
  }
};