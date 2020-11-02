const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var sampleActivity = Math.ceil(
    Math.log(MODERN_ACTIVITY / numericSampleActivity) /
      (0.693 / HALF_LIFE_PERIOD)
  );
};
