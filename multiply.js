let rlSync = require('readline-sync');


function multiply (a,b) {
  return a * b;
}

let firstNumber = rlSync.question("enter first number: ");
let secondNumber = rlSync.question("enter second number: ");

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)