const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  const arrayOfDigits = Array.from(String(n), Number);

  const initialValue = 0;
  const sumWithInitial = arrayOfDigits.reduce((acc, currentValue) => acc + currentValue, initialValue );

  if ((sumWithInitial.toString().length) > 1) {
    return  getSumOfDigits(sumWithInitial)
    }

    else {
      return sumWithInitial
     }
}

module.exports = {
  getSumOfDigits
};
