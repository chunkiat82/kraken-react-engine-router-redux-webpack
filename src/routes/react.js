'use strict';

var React = require('react');
var Router = require('react-router');

var App = require('../public/views/app.jsx');
var Scenario = require('../public/views/scenario.jsx');
var Wizard = require('../public/views/wizard.jsx');

var routes = module.exports = (
    <Router.Route path='/' handler={App}>
    	<Router.DefaultRoute name='wizard' handler={Wizard} />    	
    </Router.Route>
);