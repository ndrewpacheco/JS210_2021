// Write a function that takes one argument, a positive integer,
// and returns a string of alternating '1's and '0's, always starting with a '1'.
 // The length of the string should match the given integer.

const ONE = '1';
const ZERO = '0';

function stringy(num) {
  let result = '';

  for (let counter = 1; counter <= num; counter += 1) {
    counter % 2 === 0 ? result += ZERO : result += ONE;
  }

  console.log(result);
};


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
