var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/public/bundle.js',
  output: {
    path: path.join(__dirname, '.build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: [ 'babel?optional[]=runtime&optional[]=es7.decorators&optional[]=es7.exportExtensions&stage=2' ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },  
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    fallback: path.join(__dirname, 'node_modules'),
    alias: {
      'handlebars': 'handlebars/runtime.js'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_DEVTOOLS': JSON.stringify(process.env.NODE_DEVTOOLS),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};