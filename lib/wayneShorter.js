var request = require('request');
var config = require('../config/config');
var validUrl = require('valid-url');

function WayneShorter(config) {
  this.url = config.url;
}

WayneShorter.prototype.checkOutput = function(output, callback) {
  var payload = JSON.parse(output);
  
  if(payload.error) {
    callback(Error("An invalid URL was provided to WayneShorter"));
  }
  else {
    callback(null, payload);
  }
}

WayneShorter.prototype.makeCall = function(input, callback) {
  request.post(this.url, { form: { payload: input }}, function(err, res, body) {
    callback(err, body)
  })
}

WayneShorter.prototype.validateInput = function(input, callback) {
  if(validUrl.isUri(input)) {
    callback(null, input);
  }
  else {
    callback(Error("An invalid URL was provided to WayneShorter"));
  }
}

module.exports = new WayneShorter(config);