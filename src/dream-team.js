const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  var teamDreamName = '';
  if (!Array.isArray(members)) {
    return false;
  }
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    }
    var word = members[i].trim();

    teamDreamName = `${teamDreamName}${word[0]}`;
  }
  return teamDreamName.toUpperCase().split('').sort().join('');
};
