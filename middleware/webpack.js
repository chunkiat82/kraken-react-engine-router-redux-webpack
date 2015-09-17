import devMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import { resolve , join} from 'path';

let compiler = webpack({
  entry: resolve(__dirname, '..', 'src', 'public','bundle.js'),
  output: {   
   path: '/',
   publicPath: '/js/',
   filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [ 'babel?optional[]=runtime&optional[]=es7.decorators&optional[]=es7.exportExtensions&stage=2' ]
    },
    ,{
      test: /\.json$/,
      loader: 'json-loader'
    },
    { test: /\.hbs$/, 
      loader: "handlebars-loader" 
    }]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src'],
    fallback: join(__dirname, 'node_modules'),
    alias: {
      'handlebars': 'handlebars/runtime.js'
    }
  },
  resolveLoader: {
    fallback: join(__dirname, 'node_modules'),
    alias: {
      'hbs': 'handlebars-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_DEVTOOLS': JSON.stringify(process.env.NODE_DEVTOOLS),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
});

let options = {
  stats: {
    colors: true
  }
};

export default () => devMiddleware(compiler, options);