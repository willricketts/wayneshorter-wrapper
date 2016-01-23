var wayneShorter = require('./lib/wayneShorter');

module.exports = {
  shorten: function(input, callback) {
    wayneShorter.validateInput(input, function(err, result) {
      if(err) {
        callback(err);
      }
      else {
        wayneShorter.makeCall(input, function(err, result) {
          if(err) {
            callback(err);
          }
          else {
            wayneShorter.checkOutput(result, function(err, result) {
              if(err) {
                callback(err);
              }
              else {
                callback(null, result);
              }
            });
          }
        });
      }
    });
  }
}