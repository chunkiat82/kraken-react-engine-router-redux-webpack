"use strict";

var zip = require("jszip");

function archive (req) {
	console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
	console.log(JSON.stringify(req,null,"\t"));
	var jsZip = new zip();
	var scenarioName;
	if (req.hasOwnProperty("scenario") && req.scenario.hasOwnProperty("scenarioName")) {
		scenarioName = req.scenario.scenarioName;
	}
	var scenarioFolder = jsZip.folder(scenarioName);

	if (req.hasOwnProperty("crds") && req.crds.hasOwnProperty("response") && req.crds.response) {
		scenarioFolder.file("crds.1.json", req.crds.response);
		scenarioFolder.file("crds.2.json", req.crds.response);
		console.log("Vetri****************");
	}

	if (req.hasOwnProperty("cops") && req.crds.hasOwnProperty("response") && req.crds.response) {
		scenarioFolder.file("cops.1.json", req.cops.response);
		scenarioFolder.file("cops.2.json", req.cops.response);
		console.log("Vetri****************");
	}

	var blob = jsZip.generate({type:"blob"});
	saveAs(blob, "scenario.zip");
}

module.exports = {
	archive: archive
};