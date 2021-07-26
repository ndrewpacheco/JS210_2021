
// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// // log to the console
// Based on the average of your 3 scores your letter grade is "B".
function askQuestion(prompt) {
  let rlSync = require('readline-sync');
  answer = rlSync.question(prompt);
  return answer;
}

let totalGrade = 0;
const NUMBER_OF_SCORES = 3
for (let counter = 1; counter < 4; counter++){
  let grade = askQuestion('Enter score ' + String(counter) + ': ');
  totalGrade += Number(grade);
}

let average = totalGrade / NUMBER_OF_SCORES
let letterGrade = '';
if (average >= 90) {
  letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
} else {
  letterGrade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is ${letterGrade}.`)
