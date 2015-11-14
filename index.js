'use strict';

var express = require('express');
var kraken = require('kraken-js');

var options, app;

global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function(config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */

        next(null, config);
    }
};

app = module.exports = express();

if (__DEVELOPMENT__){    
    require('./dev')(app);    
}

app.use(kraken(options));

app.on('start', function() {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
