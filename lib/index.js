const MATH_PI = Math.PI.toString().replace(".", "");

function PI(digits) {

    if (digits <= MATH_PI.length) {
        return MATH_PI.substring(0, digits);
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

    return nums.join("");
}

module.exports = PI;
