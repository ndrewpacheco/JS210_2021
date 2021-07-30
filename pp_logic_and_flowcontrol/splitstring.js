function splitString(string, delimiter) {
  // …
  let outputString = '';

  for (let index = 0; index <= string.length; index += 1) {
    if (delimiter === undefined) {
      console.log("ERROR: no delimiter");
      break;
    }

    if (index === string.length) {
      console.log(outputString);
    } else if (string[index] === delimiter) {
      console.log(outputString);
      outputString = '';
    } else if (string[index] !== delimiter) {
      outputString += string[index];
    };
  }


  // declare an empty output string
  // iterate through each idx of string
  // if char doesnt match delimiter, concat it to outpout string
  // if char does match delimiter, log output string, and reassign to an empty string

}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello