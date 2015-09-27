# loadr

Not just another spinner.

[![Example](example/sshot.png)](example/sshot.png)

It can auto rotate messages given an element or just return messages.

[![Dependency Status](https://david-dm.org/DimitarChristoff/loadr.svg)](https://david-dm.org/DimitarChristoff/loadr)
[![devDependency Status](https://david-dm.org/DimitarChristoff/loadr/dev-status.svg)](https://david-dm.org/DimitarChristoff/loadr#info=devDependencies)


Works under ES6 or ES5

```javascript
var instance = new Loadr(document.querySelector('.loader');

instance.start();
// ...
instance.stop();
```

Change options

```javascript
var instance = new Loadr(document.querySelector('.loader', {
	delay: 2000,
	before: '<i class="fa fa-spin fa-pulse"></i> '
});
```
