const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = ''
// str === undefined ? str = "" : str;
!options.repeatTimes ? options.repeatTimes = 1 : options.repeatTimes;
!options.separator ? options.separator = '+' : options.separator;
!options.additionRepeatTimes ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
!options.additionSeparator ? options.additionSeparator = '|' : options.additionSeparator;
(options.addition == null || options.addition == false || options.addition == true) ? options.addition = `${options.addition}` : options.addition;
options.addition === undefined ? options.addition = '' : options.addition    
    
result = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
result = result.split(`${options.additionSeparator}`)
result.pop()
result = result.join(`${options.additionSeparator}`)
if (result == `undefined`) {
  result = "";
}
str = (str + result + options.separator).repeat(options.repeatTimes)
str = str.split(`${options.separator}`)
str.pop()
str = str.join(`${options.separator}`)

return str
}

module.exports = {
  repeater
};
