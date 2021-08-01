function crunch(str) {
  let result = '';
  let duplicateChar;
  for (let i = 0; i < str.length; i += 1) {
    if (duplicateChar === str[i]) continue;

    duplicateChar = str[i];
    result += str[i];
  }

  console.log(result);
  // iterate thru string
  // store char in a var
  // if present var === stored var, continue

  //

}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""