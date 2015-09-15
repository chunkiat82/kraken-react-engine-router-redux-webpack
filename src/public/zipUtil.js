"use strict";

var zip = require("jszip");
var copsAllow = require("./responseTemplates/cops/copsAllow.js");
var urds200 = require("./responseTemplates/urds/urds200.js");
var mpds200 = require("./responseTemplates/mpds/mpds200.js");

function archive (req) {
	console.log(JSON.stringify(req,null,"\t"));
	var jsZip = new zip();
	var scenarioName;
	if (req.hasOwnProperty("scenario") && req.scenario.hasOwnProperty("scenarioName")) {
		scenarioName = req.scenario.scenarioName;
	}
	var scenarioFolder = jsZip.folder(scenarioName);

	if (req.hasOwnProperty("crds") && req.crds.hasOwnProperty("response") && req.crds.response) {
		scenarioFolder.file("crds.1.json", JSON.stringify(req.crds.response));
		scenarioFolder.file("crds.2.json", JSON.stringify(req.crds.response));
	}

	if (req.hasOwnProperty("cops") && req.crds.hasOwnProperty("response") && req.crds.response) {
		scenarioFolder.file("cops.1.json", JSON.stringify(req.cops.response));
		scenarioFolder.file("cops.2.json", JSON.stringify(copsAllow));
	}

	scenarioFolder.file("urds.1.json", JSON.stringify(urds200));
	scenarioFolder.file("mpds.1.json", JSON.stringify(mpds200));
	scenarioFolder.file("scenario.txt", "This is to test " + scenarioName + " scenario.");

	var blob = jsZip.generate({type:"blob"});
	saveAs(blob, scenarioName + ".zip");
}

module.exports = {
	archive: archive
};