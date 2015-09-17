'use strict';

var Routes = require('../routes/react.js');
var Client = require('react-engine/lib/client');

// Include all view files. Browerify doesn't do
// this automatically as it can only operate on
// static require statements.
require('./views/app.js');
require('./views/cops.js');
require('./views/copsFields.js');
require('./views/footer.js');
require('./views/generate.js');
require('./views/header.js');
require('./views/layout.js');
require('./views/scenario.js');
require('./views/wizard.js');

// boot options
var options = {
    routes: Routes,
    // supply a function that can be called
    // to resolve the file that was rendered.
    viewResolver: function(viewName) {
        return require('./views/' + viewName);
    }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
});
