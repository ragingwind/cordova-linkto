import path from 'path';
import mkdirp from 'mkdirp';
import test from 'ava';
import randomTmpdir from 'os-random-tmpdir';
import cordovaLinkTo from './';

const tmp = randomTmpdir('cordova-linkto');
const newAppPath = path.join(tmp, 'build');
const platformPath = path.join(tmp, 'platform');

test.before(() => {
	mkdirp.sync(newAppPath);
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
