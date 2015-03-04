/*global describe, it */
'use strict';
var assert = require('assert');
var cordovaLinkTo = require('../');

describe('cordova-linkto', function () {
  it('should change link path', function (done) {
    cordovaLinkTo('./test/build', './test/platform', function(err, res) {
    	assert(err == null);
    	assert(res.changeTo.indexOf('build') !== 0);
    	done();
    });
  });
});
