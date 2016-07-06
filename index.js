'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function (appPath, platformPath) {
	return new Promise(resolve => {
		appPath = path.resolve(process.cwd(), appPath);
		platformPath = path.resolve(process.cwd(), platformPath);

		fs.exists(appPath, exists => {
			if (!exists) {
				console.log('Target path is not exist. but will create the link', appPath);
			}

			const www = path.join(platformPath, 'www');
			fs.readlink(www, (_, links) => {
				// unlink previous path
				if (links) {
					fs.unlinkSync(www, 'dir');
				}

				// link new path to platform/www
				fs.symlinkSync(appPath, www, 'dir');

				resolve({
					changeTo: appPath,
					changeFrom: links
				});
			});
		});
	});
};
