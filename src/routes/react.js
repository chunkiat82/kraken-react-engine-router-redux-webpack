'use strict';

var React = require('react');
var Router = require('react-router');

var App = require('../public/views/app.js');
var Scenario = require('../public/views/scenario.js');
var Wizard = require('../public/views/wizard.js');

var routes = module.exports = (
    <Router.Route path='/' handler={App}>
    	<Router.DefaultRoute name='wizard' handler={Wizard} />    	
    </Router.Route>
);