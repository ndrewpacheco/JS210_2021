let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
console.log(asciiNumeric);
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase



function toLowerCase(string) {
  let lowerCaseString = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCodeNumber = string.charCodeAt(index);
    if (charCodeNumber >= 65 && charCodeNumber <= 90) {
      charCodeNumber += 32;
      lowerCaseString += String.fromCharCode(charCodeNumber);
    } else {
      lowerCaseString += string[index];
    }
  }
  return console.log(lowerCaseString)
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"