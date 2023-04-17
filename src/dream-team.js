const { NotImplementedError } = require('../extensions/index.js');

// Names of the members should be strings.
// Values with other type should be ignored
// In case of wrong members type function must return false.


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
  if(!Array.isArray(members)) return false;
  let data = [...members].filter(name => typeof name === 'string' && name.length > 0);
  data = data.map(name => name.toUpperCase().trim()).sort()
  let result = '';
  data.forEach(name => result += name[0])
  return result
}

module.exports = {
  createDreamTeam
};
