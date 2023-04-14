const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  const lettersCounts = [];

  strArr.forEach((el, index, _arr) => {
    if(el === _arr[index-1]){
      lettersCounts[lettersCounts.length-1].count++;
    } else {
      lettersCounts.push({
        letter: el,
        count: 1,
      });
    }
  });

  return lettersCounts.map(el => {
    return el.count > 1 ? `${el.count}${el.letter}` : el.letter;
  }).join('');
}

module.exports = {
  encodeLine
};
