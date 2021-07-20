let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);

for (num = 10; num <= 30; num += 10) {
  console.log(`In ${num} years, you will be ${age + num} years old.`);
};

// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);


