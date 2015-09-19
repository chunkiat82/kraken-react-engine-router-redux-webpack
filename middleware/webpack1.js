import webpack from 'webpack';
import webpackConfig from '../webpack.config';
var compiler = webpack(webpackConfig);
import devMiddleware from 'webpack-hot-middleware';

export default () => devMiddleware(compiler,{log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000});