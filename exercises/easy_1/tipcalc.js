// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00
let rlSync = require('readline-sync');


console.log('What is the bill? ');
let bill = parseInt(rlSync.prompt());

console.log('What is the tip percentage? ');
let tipPercentage = parseInt(rlSync.prompt());

tipPercentage *= .01;
let tip = bill * tipPercentage;
let total = bill + tip;

console.log(typeof tipPercentage);
console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));