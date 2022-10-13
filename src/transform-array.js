const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  } 
  
  let arr2 = arr.slice();

  for (let ind = 0; ind < arr2.length; ind++) {
    if ( (ind === 0) && (arr2[ind] === '--discard-prev' || arr2[ind] === '--double-prev' || arr2[ind] == undefined) ) {
      arr2.shift()
    } else if ((ind === arr2.length - 1) && (arr2[ind] === '--discard-next' || arr2[ind] == '--double-next' || arr2[ind] == undefined)) {
      arr2.pop()
  }

  if (arr2[ind] === '--discard-next') {
    if (arr2[ind+2] == '--discard-prev' || arr2[ind+2] == `--double-prev`) {
      arr2.splice(ind, 3);
      ind -= 2;
    } else {
      arr2.splice(ind, 2)
      ind--
    }
  }

  if (arr2[ind] == '--double-next') {
    arr2.splice(ind, 1, arr2[ind + 1])
  }
  
  if (arr2[ind] === '--discard-prev') {
        arr2.splice(ind - 1, 2)
        ind--
      }

  if (arr2[ind] === '--double-prev') {
        arr2.splice(ind, 1, arr2[ind - 1])
      }
    }
    return arr2
}

module.exports = {
  transform
};
