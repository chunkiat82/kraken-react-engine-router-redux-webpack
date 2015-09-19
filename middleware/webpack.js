import webpack from 'webpack';
import webpackConfig from '../webpack.config';
var compiler = webpack(webpackConfig);
import devMiddleware from 'webpack-dev-middleware';

console.log("sdfasd");
export default () => devMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath});