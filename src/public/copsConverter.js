'use strict';

var Handlebars = require('handlebars');
var copsTemplate = require('./copsTemplate');
var dataElementTemplate = require('./dataElementTemplate');

function convert(userInput) {
    var coreProperties = [];
    for( var key in userInput.fields) {
        console.log("i:"+key);
        var dataEleTemplate = Handlebars.compile(JSON.stringify(dataElementTemplate));
        var dataEle = JSON.parse(dataEleTemplate(userInput.fields[key]));
        coreProperties.push(dataEle);
    }
    console.log(JSON.stringify(coreProperties,null,'\t'));
    userInput.coreProperties = coreProperties;
    var theTemplate = Handlebars.compile (JSON.stringify(copsTemplate));
    var tmp = theTemplate (userInput);
    var result = JSON.parse(tmp);
    result.decisions[0].data_elements[0].data_elements[0].data_elements = coreProperties;
    console.log(JSON.stringify(result,null,'\t'));
    console.log("------------------");
    return result;
};

module.exports = convert;
