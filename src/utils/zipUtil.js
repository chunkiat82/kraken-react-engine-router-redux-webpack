"use strict";

var zip = require("jszip");
var copsAllow = require("../templates/cops/copsAllow.json");
var urds200 = require("../templates/urds/urds200.json");
var mpds200 = require("../templates/mpds/mpds200.json");
var reqUser = require("../templates/req-user.json");

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
	scenarioFolder.file("req-user.json", JSON.stringify(reqUser));
	scenarioFolder.file("scenario.txt", "This is to test " + scenarioName + " scenario.");

	var blob = jsZip.generate({type:"blob"});
	saveAs(blob, scenarioName + ".zip");
}

module.exports = {
	archive: archive
};