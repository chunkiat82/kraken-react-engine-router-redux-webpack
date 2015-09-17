import devMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import { resolve , join} from 'path';

let compiler = webpack({
  entry: resolve(__dirname, '..', 'src', 'public','bundle.js'),
  output: {
    path: join(__dirname, '.build'),
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
    fallback: join(__dirname, 'node_modules'),
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
});

export default () => devMiddleware(compiler, {});