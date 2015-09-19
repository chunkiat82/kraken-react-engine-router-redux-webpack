"use strict";

var Handlebars = require("handlebars");
var template = require("../templates/crds/consumerCip.hbs");

function convert (req) {
	
	var crdsResponse = JSON.parse(template(req));
	return crdsResponse;
}

module.exports = {
	convert: convert
};