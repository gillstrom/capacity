# capacity

> Get your computers full charge capacity *(OS X)*

Full charge capacity refers to the amount of power as measured in mAh the battery is capable of containing. This number lowers as the battery becomes depleted with usage and age.


[Apple's battery guarantee](https://www.apple.com/batteries/service-and-recycling/) says:

> Your battery is designed to retain up to 80% of its original capacity at 1000 complete charge cycles. The one-year warranty includes replacement coverage for a defective battery. Apple offers a battery replacement service for all MacBook, MacBook Air, and MacBook Pro notebooks with built-in batteries.


## CLI

```
$ npm install --global capacity
```

```
$ capacity --help

  Usage
    $ capacity
```


## Install

```
$ npm install --save capacity
```


## Usage

```js
const capacity = require('capacity');

capacity().then(value => {
	console.log(value);
	//=> 0.98
});
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
