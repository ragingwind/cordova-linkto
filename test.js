import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import test from 'ava';
import randomTmpdir from 'os-random-tmpdir';
import cordovaLinkTo from './';

const tmp = randomTmpdir('cordova-linkto');
const newAppPath = path.join(tmp, 'build');
const platformPath = path.join(tmp, 'platform');

test.before(() => {
	rimraf.sync(newAppPath);
	mkdirp.sync(newAppPath);
	rimraf.sync(platformPath);
	mkdirp.sync(platformPath);
});

test(t => {
	return cordovaLinkTo(path.join(tmp, 'build'), path.join(tmp, 'platform'))
		.then(res => {
			t.true(res.changeTo.indexOf('build') !== 0);
		})
		.catch(err => {
			t.fail(err.toString());
		});
});
