const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (Array.isArray(arr) !== true) {
    throw 'Error';
  }

  let diN = '--discard-next';
  let diP = '--discard-prev';
  let doN = '--double-next';
  let doP = '--double-prev';
  let transArr = arr.slice(); //дублирую массив



  for (i = 0; i < arr.length; i++) { // прохожусь по массиву и заменяю все строки на значения по условию которое дает строка. все, что в результате будет убрано, делаю undefined
    if (transArr[i] === diN) {
      transArr[i] = undefined;
      transArr[i + 1] = undefined;
    } else if (transArr[i] === diP) {
      transArr[i] = undefined;
      transArr[i - 1] = undefined;
    } else if (transArr[i] === doN) {
      if (transArr[i + 1] !== undefined) /*проверяю что бы следующий элемент существовал*/ {
        transArr[i] = transArr[i + 1];
      } else {
        transArr[i] = undefined;
      }
    } else if (transArr[i] === doP) {
      if (transArr[i - 1] !== undefined) {
        transArr[i] = transArr[i - 1];
      } else {
        transArr[i] = undefined;
      }
    }

  }
  let result = new Array() //добавляю все в новый массив, исключая undefined значения
  transArr.forEach(el => {
    if (el !== undefined) {
      result.push(el);
    };
  })

  return result;
};