'use strict';

var Handlebars = require('handlebars');
var copsTemplate = require('./copsTemplate');
var dataElementTemplate = require('./dataElementTemplate');

function convert(userInput) {
    console.log("in cops converter convert");
    console.log("userInput:");
    console.log(JSON.stringify(userInput,null,'\t'));
    var coreProperties = [];
    console.log("userInput.fields.size:"+ userInput.fields.size);
    for( var key in userInput.fields) {
        console.log("i:"+key);
        var dataEleTemplate = Handlebars.compile (JSON.stringify(dataElementTemplate));
        var dataEle = dataEleTemplate(userInput.fields[key]);
        coreProperties.push(dataEle);
    }
    console.log(JSON.stringify(coreProperties,null,'\t'));
    userInput.coreProperties = JSON.stringify(coreProperties);
    console.log("goign to compile...");
    var theTemplate = Handlebars.compile (JSON.stringify(copsTemplate));
    console.log("goign to replace...");
    var tmp = theTemplate (userInput);
    console.log(tmp);
    console.log("goign to parse...");
    var result = JSON.parse(tmp);
    console.log("after replace:");
    console.log(JSON.stringify(result,null,'\t'));
    console.log("------------------");
    return result;
};

module.exports = convert;
