// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.




// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.
const LETTER_S = 's';
const LETTER_P = 'p';

let rlSync = require('readline-sync');
let userInteger;

do {
  console.log('Please enter an integer greater than 0: ');
  userInteger = rlSync.prompt();
  userInteger = Number.parseInt(userInteger);
  if (userInteger <= 0) console.log("Integer must be greater than zero.")
} while (userInteger <= 0);


console.log('Enter "s" to compute the sum, or "p" to compute the product.');
userCommand = rlSync.prompt();

if (userCommand === 's') {
  let sum = 0;
  for (let counter = 1; counter <= userInteger; counter += 1){
    sum += counter;
  }

  console.log(`The sum of the integers between 1 and ${userCommand} is ${sum}.`)

} else if (userCommand === 'p') {
  let product = 1;
  for (let counter = 1; counter <= userInteger; counter += 1){
    product *= counter;
  }

  console.log(`The product of the integers between 1 and ${userCommand} is ${product}.`);
}








