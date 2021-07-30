function isFirstHalfOfAlphabet(charCode) {
  return (charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109);
}

function isSecondHalfOfAlphabet(charCode) {
  return (charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122);
}

function rot13(str) {
  const ROTATION = 13;
  let newString = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    let charCode = str.charCodeAt(idx);

    if (isFirstHalfOfAlphabet(charCode)) {
      newString += String.fromCharCode(charCode + ROTATION);
    } else if (isSecondHalfOfAlphabet(charCode)) {
      newString += String.fromCharCode(charCode - ROTATION);
    } else {
      newString += str[idx];
    };
  }
  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.