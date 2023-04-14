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
const winterSeasons = [0, 1, 11];
const autumnSeasons = [8, 9, 10];
const summerSeasons = [5, 6, 7];
const springSeasons = [2, 3, 4];

function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch (e){
    throw new TypeError('Invalid date!');
  }
  if(winterSeasons.includes(date.getMonth())) return 'winter';
  if(autumnSeasons.includes(date.getMonth())) return 'autumn';
  if(summerSeasons.includes(date.getMonth())) return 'summer';
  if(springSeasons.includes(date.getMonth())) return 'spring';
}

module.exports = {
  getSeason
};
