function doubleConsonants(str) {
  let result = '';
  str.split('').forEach(char => {
    if (isValid(char)) result += char;
    result += char;
  });
  console.log(result);
}
function isValid(char) {
  let consonantRegex = /[bcdfghjklmnpqrstvwxyq]/gi;
  return char.match(consonantRegex);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""