const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return `Unable to determine the time of year!`
  }

  if (!(date instanceof Date) || Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let currentMonth = date.getMonth() + 1;

  if (currentMonth === 12 || currentMonth < 3) {
    return `winter`
  }

  if ((currentMonth > 2 && currentMonth < 6)) {
    return `spring`;
  }
  
  if ((currentMonth > 5 && currentMonth < 9)) {
    return `summer`;
  }
  
  if ((currentMonth > 8 && currentMonth < 12)) {
    return `autumn`;
  }
}

module.exports = {
  getSeason
};
