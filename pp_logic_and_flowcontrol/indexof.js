function indexOf(firstString, secondString) {
  // statements

  let lengthLimit = firstString.length - secondString.length

  for (let index = 0; index <= lengthLimit; index += 1) {
    let endString = index + secondString.length
    comparableString = firstString.substring(index, endString );
    if (comparableString === secondString) {
      return index;
    }
  }
  return -1
}

function lastIndexOf(firstString, secondString) {
  let index = indexOf(reverseString(firstString), reverseString(secondString));
  if (index === -1) {
    return -1;
  }
  let result = firstString.length - (index + secondString.length)
  return result;

}

function reverseString(str) {
  return str.split('').reverse().join('');
}
indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1