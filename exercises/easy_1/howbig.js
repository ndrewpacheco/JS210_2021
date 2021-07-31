function prompt(str) {
  let rlSync = require('readline-sync');
  let answer = rlSync.question(str);
  return answer;
}

// Note: 1 square meter == 10.7639 square feet

const SQUARE_FEET = 10.7639;

let length = prompt('Enter the length of the room in meters: ');

let width = prompt('Enter the width of the room in meters: ');

let areaInMeters = (length * width);
let areaInFeet = areaInMeters * SQUARE_FEET;

console.log('The area of the room is ' + areaInMeters.toFixed(2) + ' square meters (' + areaInFeet.toFixed(2) + ' square feet).');
// The area of the room is 70.00 square meters (753.47 square feet).



