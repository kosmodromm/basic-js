const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // задал массивы для последующего заполнения и значения по умолчанию
  let arrFromStr = [];
  let addArr = [];
  let addStr = options.addition ? options.addition : '';
  let sep = options.separator ? options.separator : '+';
  let addSep = options.additionSeparator ? options.additionSeparator : '|';

  // создал доп строку с доп разделителями
  if (options.addition !== undefined && options.additionRepeatTimes !== undefined) {
    options.addition === null ? options.addition = 'null' : '';
    addArr = Array(options.additionRepeatTimes).fill(options.addition);
    addStr = addArr.join(addSep);
  }

  // проверка на нестандартные слуячаи
  if (options.repeatTimes === 0 || options.repeatTimes === undefined || isNaN(options.repeatTimes) || typeof options.repeatTimes !== "number") {
    return str + addStr;
  }

  // заполнение массива с результатом и возврат строки с основным разделителем 
  arrFromStr = Array(options.repeatTimes).fill(str + addStr);
  return arrFromStr.join(sep);
};