# PI Number
Going deeper inside of the PI number.

## Installation
Run the following commands to download and install the application:

```sh
$ npm install -g pi-number
```

Usage:

```sh
$ pi 16
3.141592653589793
```

## Example

```js
// Dependencies
var PI = require("pi-number");

// Three decimals
console.log(PI(3));

// 16 decimals
console.log("First 16 decimals: " + PI(16, false));
```

Output:

```sh
3.14
First 16 decimals: 141592653589793
```

## Documentation
### `PI(digits, includeThree)`
Calculates the first *n* decimals of PI number.

#### Params
- **Number** `digits`: The number of decimals of the PI number.
- **Boolean** `includeThree`: A flag indicating if the `"3."` snippet should be prepended or not (default: `true`).

#### Return
- **String** The PI decimals.

## Credits
This algorithm is highly based on [this great answer from StackOverflow](http://stackoverflow.com/a/11679372/1420197). Thanks! :smile:

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
