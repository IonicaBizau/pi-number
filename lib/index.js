const digits = require("pi-digits").digits

/**
 * PI
 * Returns the first *n* decimals of PI number, including `3.` by default.
 *
 * @name PI
 * @function
 * @param {Number} n The number of decimals of the PI number.
 * @param {Boolean} includeThree A flag indicating if the `"3."` snippet should be prepended or not (default: `true`).
 * @return {String} The PI decimals.
 */
function PI(n, includeThree) {
    includeThree = includeThree === false ? false : true;
    let ret = includeThree ? "3" : ""
    n = n < 0 ? 0 : n
    const seg = digits.slice(0, n).join("")
    if (seg) {
        ret += (ret ? "." : "") + seg
    }
    return ret
}

module.exports = PI;
