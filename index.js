'use strict';
module.exports = function cordovaLinkTo(appPath, platformPath, cb) {
  var fs = require('fs');
  var path = require('path');

  platformPath = path.resolve(process.cwd(), platformPath);
  appPath = path.resolve(process.cwd(), appPath);

  fs.exists(appPath, function(exists) {
    if (!exists) {
      console.log('Target path is not exist. but will make a link', appPath);
    }

    var wwwPath = path.join(platformPath, 'www');

    fs.readlink(wwwPath, function(err, links) {
      var configPath = path.join(platformPath, '.cordova/config.json');
      var config = require(configPath);

      if (config.lib.www.link !== true) {
        throw new Error('Cordova project has no www link uri');
      }

      // unlink previous path
      if (links) {
        fs.unlinkSync(wwwPath, 'dir');
      }

      // link new path to platform/www
      fs.symlinkSync(appPath, wwwPath, 'dir')

      // update config for new path
      config.lib.www.uri = appPath;
      fs.writeFile(configPath, JSON.stringify(config, 0, '\t'), function(err) {
        cb && cb(err, {
        	changeTo: appPath,
        	changeFrom: links
        });;
      });
    });
  });
};