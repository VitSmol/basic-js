const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = []
  if (!Array.isArray(members)) {
    return false;
  }
  // remove line with error and write your code here
  for (let i = 0; i < members.length; i++) {
    if ((typeof members[i]) == 'string') {
      let x = members[i].trim();
      result.push(x[0].toUpperCase())
    } 
  }
  
  return result.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}

module.exports = {
  createDreamTeam
};
