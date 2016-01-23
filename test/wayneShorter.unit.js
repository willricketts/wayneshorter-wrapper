var assert = require('assert');
var sinon = require('sinon');
var wayneShorter = require('../lib/wayneShorter.js');
var should = require('chai').should();
var chai = require('chai');
var expect = chai.expect;

describe('WayneShorter', function() {
  describe('#checkOutput()', function() {
    it('should return a parsed response from WayneShorter', function() {
      var obj = {
        payload: 'http://google.com',
        identifier: 'EkJU5D2ue',
        shortlink: 'http://shrtr.in/EkJU5D2ue'
      };
      var wayneShorterResponse = JSON.stringify(obj);
      wayneShorter.checkOutput(wayneShorterResponse, function(err, output) {
        should.not.exist(err);
        JSON.stringify(output).should.equal(wayneShorterResponse);
      });
    });
    it('should return an error when the WayneShorter response object contains an error key', function() {
      var obj = {
        error: 'invalidUrl'
      };
      
      var wayneShorterResponse = JSON.stringify(obj);
      wayneShorter.checkOutput(wayneShorterResponse, function(err, output) {
        should.not.exist(output);
        should.exist(err);
      });
    });
  });
  
  describe('#validateInput()', function() {
    var goodUrl = "http://google.com";
    var badUrl = "hellothisisdog";
    it('should return an error if an invalid URL is provided', function() {
      wayneShorter.validateInput(badUrl, function(err, result) {
        should.not.exist(result);
        should.exist(err);
      });
    });
    it('should return the provided input if it is a valid URL', function() {
      wayneShorter.validateInput(goodUrl, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.equal(goodUrl);
      });
    });
  });
});