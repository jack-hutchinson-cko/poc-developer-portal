var fs = require('fs');

var _outputDirectory = "output";
var _specDirectory = "developer-portal/spec";
var _yamlOutputFile = "openapi/swagger.yaml";
var _jsonOutputFile = "openapi/swagger.json";
var _codeSamples = [];
var httpVerbs = ["get", "put", "post", "delete", "options", "head", "patch", "trace"];


