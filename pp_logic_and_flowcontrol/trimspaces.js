function trim(str) {
  let firstIndex = -1;
  do {
    firstIndex += 1;
  } while (str[firstIndex] === ' ')

  let lastIndex = str.length;
  do {
    lastIndex -= 1;
  } while (str[lastIndex] === ' ')

  trimmedString = '';
  for (let index = firstIndex; index <= lastIndex; index += 1) {
    trimmedString += str[index];
  }
  console.log(trimmedString);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""