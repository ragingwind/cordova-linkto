#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cordovaLinkTo = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cordova-linkto <app-path> <platform-root-path>',
    '',
    'Example',
    '  cordova-linkto build ./cordova'
  ].join('\n')
});

cordovaLinkTo(cli.input[0], cli.input[1], function(err, res) {
	err && console.log(err.toString());
	console.log('Cordova www link is changed to', res.changeTo, 'from', res.changeFrom);
});
