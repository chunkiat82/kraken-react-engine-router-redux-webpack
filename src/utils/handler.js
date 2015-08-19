"use strict";

var Handlebars = require("handlebars");
var template = require("../templates/default.hbs");

function convert (obj) {
	return JSON.parse(template(obj));	
}

module.exports = {
	convert: convert
};