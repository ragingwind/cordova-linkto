# cordova-linkto [![Build Status](https://travis-ci.org/ragingwind/cordova-linkto.svg?branch=master)](https://travis-ci.org/ragingwind/cordova-linkto)

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

MIT © [Jimmy Moon](http://ragingwind.me)
