'use strict'
// This file is currently not in use, not working with kraken, currently
// its being activated in dev.js
var webpack = require('webpack');
var webpackConfig = require('../webpack.hot.config');
var compiler = webpack(webpackConfig);

// if it works
// the reason why i had to do this because 
// the compiler has information that the next middleware needs (hot)
module.exports = {
    run: function() {    	
        var middleware = require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        });
        var hotMiddleware = require("webpack-hot-middleware")(compiler, {
            log: console.log,
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000
        });
        return function (req,res, next){

        	var nextMiddleware = function(){
        		hotMiddleware(req,res,next)        		
        	}
        	middleware(req,res, nextMiddleware)
        	
        }
    }
}
