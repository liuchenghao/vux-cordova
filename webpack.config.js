var webpack = require('webpack');
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var src = path.join(projectRoot, 'src')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../site/static'),
    publicPath: './static/',
    filename: 'index.js'
  },
  // output: {
  //   filename: 'index.js',
  //   libraryTarget: 'commonjs2'
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  // },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({minimize: true})
  // ]
  }
};
