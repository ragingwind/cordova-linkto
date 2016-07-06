# cordova-linkto [![Build Status](https://travis-ci.org/ragingwind/cordova-linkto.svg?branch=master)](https://travis-ci.org/ragingwind/cordova-linkto)

> Redirect cordova `www` link to new your app


## Install

```sh
$ npm install --save cordova-linkto
```


## Usage

```js
const cordovaLinkTo = require('cordova-linkto');

cordovaLinkTo(newAppPath, platformPath).then(res => {
  // check result
});
```

```sh
$ npm install --global cordova-linkto
$ cordova-linkto --help
$ cordova-linkto app ./platform
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
