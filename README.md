#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Change www link direction to your app


## Install

```sh
$ npm install --save cordova-linkto
```


## Usage

```js
var linkto = require('cordova-linkto');

linkto(appPath, platformPath, function(err) {
    err && console.log(err);
});
```

```sh
$ npm install --global cordova-linkto
$ cordova-linkto --help
$ cordova-linkto app ./platform
```

## License

MIT © [ragingwind](http://ragingwind.me)


[npm-url]: https://npmjs.org/package/cordova-linkto
[npm-image]: https://badge.fury.io/js/cordova-linkto.svg
[travis-url]: https://travis-ci.org/ragingwind/cordova-linkto
[travis-image]: https://travis-ci.org/ragingwind/cordova-linkto.svg?branch=master
[daviddm-url]: https://david-dm.org/ragingwind/cordova-linkto.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ragingwind/cordova-linkto
