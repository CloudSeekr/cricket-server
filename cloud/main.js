require('cloud/app.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("stats", function(request, response) {
  response.success("Stats called!");
});

Parse.Cloud.define("prof", function(request, response) {
  response.success("Prof launched!");
});