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
      // unlink previous path
      if (links) {
        fs.unlinkSync(wwwPath, 'dir');
      }

      // link new path to platform/www
      fs.symlinkSync(appPath, wwwPath, 'dir')

      if (cb) {
        cb(err, {
        	changeTo: appPath,
        	changeFrom: links
        });;
      }
    });
  });
};