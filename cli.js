#!/usr/bin/env node
'use strict';

const meow = require('meow');
const cordovaLinkTo = require('./');

const cli = meow({
	help: [`
    Usage
      cordova-linkto <app-path> <platform-root-path>

    Example,
      cordova-linkto build ./cordova
  `]
});

cordovaLinkTo(cli.input[0], cli.input[1]).then(res => {
	console.log(`Cordova Link has been changed from ${res.changeFrom} to ${res.changeTo}`);
}).catch(err => {
	console.err(err.toString());
});
