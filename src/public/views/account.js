'use strict';

var Layout = require('./layout.js');
var React = require('react'),
    Input = require('react-bootstrap').Input;
var Wizard = require('react-wizard');
var Scenario = require('./scenario');

var STYLES = {
    input:{
        marginTop:'1em'
    }
};

module.exports = React.createClass({

    render: function() {        
        var scenarios=[Scenario];
        return React.createElement(Wizard, {steps: scenarios});
    }
});
