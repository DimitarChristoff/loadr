# loadr

Not just another spinner.

[![Example](https://rawgit.com/DimitarChrisoff/loadr/master/example/sshot.png)](http://jsfiddle.net/dimitar/kvxyc1bg/)

It can auto rotate messages given an element or just return messages.

[![Dependency Status](https://david-dm.org/DimitarChristoff/loadr.svg)](https://david-dm.org/DimitarChristoff/loadr)
[![devDependency Status](https://david-dm.org/DimitarChristoff/loadr/dev-status.svg)](https://david-dm.org/DimitarChristoff/loadr#info=devDependencies)


Works under ES6 or ES5, browser or nodejs -- no external dependencies.

### usage

Typical use with defaults just changing text

```javascript
var instance = new Loadr(document.querySelector('.loader');

instance.start();
// ...
instance.stop();
```

Change some options

```javascript
var instance = new Loadr(document.querySelector('.loader', {
	delay: 2000,
	before: '<i class="fa fa-spin fa-pulse"></i> '
});
```

Just get random excuse messages

```javascript
var instance = new Loadr();

console.log(i.get());
```

### installing

You can install via npm, bower or download the script.

```
$ npm install randloadr
$ bower install loadr
```

`src/loadr.js` is ES6 raw, `dist/loadr.js` is the minified ES5 version.

### credits

Messages taken from VideoStream for Chromecast plugin for Chrome.
