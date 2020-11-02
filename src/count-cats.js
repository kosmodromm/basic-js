const CustomError = require('../extensions/custom-error');

module.exports = function countCats(array) {
  var cat = '^^';
  var result = 0;

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (cat === array[i][j]) {
        result++;
      }
    }
  }
  return result;
};
