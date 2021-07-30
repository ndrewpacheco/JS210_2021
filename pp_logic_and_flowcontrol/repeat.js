function repeat(string, times) {
  if (typeof times !== 'number' || times < 0) {
    return console.log(undefined)
  }

  newString = '';
  for (let counter = 1; counter <= times; counter += 1) {
    newString += string;
  }
  console.log(newString)
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined