// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// message on the console
// You have been denied access.

// If the user enters the right password, report login success.
// What is the password: password

// message on the console



function askQuestion(prompt) {
  let rlSync = require('readline-sync');
  name = rlSync.question(prompt);
  return name;
}

password = askQuestion("What is the password?")
console.log(password);
