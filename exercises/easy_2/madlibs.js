// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!

let rlSync = require('readline-sync');

console.log('Enter a noun:');
let noun = rlSync.prompt();

console.log('Enter a verb:');
let verb = rlSync.prompt();

console.log('Enter a adjective:');
let adjective = rlSync.prompt();

console.log('Enter a adverb:');
let adverb = rlSync.prompt();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? haha`)