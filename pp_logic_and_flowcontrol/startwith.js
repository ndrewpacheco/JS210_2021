function startsWith(string, searchString) {
  // if (searchString.length >= string.length) {
  //   return console.log(false);
  // }

  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      return console.log(false);
    }
  }

  return console.log(true);
}


let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false