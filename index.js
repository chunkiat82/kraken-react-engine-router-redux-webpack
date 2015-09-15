
"use strict";

var kraken = require("kraken-js"),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 8001,
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */

        next(null, config);
    }
};
app.use(kraken(options));
app.listen(port, function (err) {
    if (err) {
        console.error(err.message);
    } else {
        process.env.NODE_ENV = app.settings.env;
        require('babel/register');
        console.log("[%s] Listening on http://localhost:%d", app.settings.env.toUpperCase(), port);
    }
});