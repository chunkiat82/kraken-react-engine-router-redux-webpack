'use strict';

var express = require('express');
var kraken = require('kraken-js');

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */

        next(null, config);
    }
};

if (process.env.NODE_ENV == 'dev'){
	require('babel/register')	
}

app = module.exports = express();

// Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.hot.config');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

app.use(kraken(options));

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
