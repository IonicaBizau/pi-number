# `$ pi` [![Support this project][donate-now]][paypal-donations]

Going deeper inside of the PI number.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g pi
```

Then, run `pi --help` and see what the CLI tool can do.

```sh
$ pi --help
3.
```

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i pi
```

```js
// Dependencies
var PI = require("pi");

console.log(PI(3));
// => 3.14

console.log("First 16 decimals: " + PI(16, false));
// => First 16 decimals: 141592653589793
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md