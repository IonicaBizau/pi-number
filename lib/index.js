// Constants
const MATH_PI = Math.PI.toString().replace(".", "");

/**
 * PI
 * Calculates the first *n* decimals of PI number.
 *
 * @name PI
 * @function
 * @param {Number} digits The number of decimals of the PI number.
 * @param {Boolean} includeThree A flag indicating if the `"3."` snippet should be prepended or not (default: `true`).
 * @return {String} The PI decimals.
 */
function PI(digits, includeThree) {

    includeThree = includeThree === false ? false : true;
    if (includeThree) {
        return "3." + PI(digits, false);
    }

    if (digits <= MATH_PI.length) {
        return MATH_PI.substring(1, digits);
    }

    var x = []
      , r = []
      , j = 0
      , i = 0
      , q = 0
      , carry = 0
      , num = 0
      , dem = 0
      , nums = []
      ;

    for (; j < digits; ++j) {
        x[j] = 20;
    }

    for (; i < digits; ++i) {
        carry = 0;
        for (j = 0; j < digits; ++j) {
            num = parseInt(digits - j - 1);
            dem = parseInt(num * 2 + 1);
            x[j] += carry;
            q = parseInt(x[j] / dem);
            r[j] = parseInt(x[j] % dem);
            carry = q * num;
        }
        nums.push(
            parseInt(x[digits - 1] / 10)
        );
        r[digits - 1] = parseInt(x[digits - 1] % 10);
        for (j = 0; j < digits; ++j) {
            x[j] = r[j] * 10;
        }
    }

    return nums.slice(1).join("");
}

module.exports = PI;
