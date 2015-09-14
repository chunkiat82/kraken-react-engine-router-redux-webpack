"use strict";

var Handlebars = require("handlebars");
var crdsTemplate = require("./responseTemplates/crds/consumerCip.js");

function convert (req) {
	var template = Handlebars.compile(JSON.stringify(crdsTemplate));
	var crdsResponse = JSON.parse(template(req));
	return crdsResponse;
}

module.exports = {
	convert: convert
};