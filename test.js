function indexOf(firstString, secondString) {
  for (let index = 0; index < firstString.length; index += 1) {
    let matchingString = '';
    for (let matchingIndex = index; matchingIndex < index + secondString.length; matchingIndex += 1) {
      matchingString += firstString[matchingIndex];
    }

    if (matchingString === secondString) return index;
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  for (let index = firstString.length - 1; index >= 0; index -= 1) {
    let matchingString = '';
    for (let matchingIndex = index; matchingIndex < index + secondString.length; matchingIndex += 1) {
      matchingString += firstString[matchingIndex];
    }
    if (matchingString === secondString) return index;
  }
  return -1;
}

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1