const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( str ) {
  let reverse = str.split("").reverse()
  let index = reverse.findIndex(el => el == "@");
  return reverse = reverse.splice(0, index).reverse().join('')
}

module.exports = {
  getEmailDomain
};
