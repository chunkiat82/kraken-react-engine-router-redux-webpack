'use strict';

var Handlebars = require('handlebars');
var copsTemplate = require('./responseTemplates/cops/copsTemplate.hbs');
var dataElementTemplate = require('./responseTemplates/cops/dataElementTemplate.hbs');

function convert(userInput) {
    var coreProperties = [];
    for( var key in userInput.fields) {
        console.log("i:"+key);
        
        var dataEle = JSON.parse(dataElementTemplate(userInput.fields[key]));
        coreProperties.push(dataEle);
    }
    console.log(JSON.stringify(coreProperties,null,'\t'));
    userInput.coreProperties = coreProperties;
    
    var tmp = copsTemplate (userInput);
    var result = JSON.parse(tmp);
    result.body.decisions[0].data_elements[0].data_elements[0].data_elements = coreProperties;
    console.log(JSON.stringify(result,null,'\t'));
    console.log("------------------");
    return result;
};

module.exports = {
    convert: convert
};