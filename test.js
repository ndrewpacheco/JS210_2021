function repeatedCharacters(str) {
  let allChars = {};
  str.split('').forEach(function(char) {
    char = char.toLowerCase();
    if (allChars[char]) {
      allChars[char] += 1;
    } else {
      allChars[char] = 1;
    }
  });

  let filterChars = Object.keys(allChars).filter(char => allChars[char] > 1);
  let result = {};

  filterChars.forEach(function(char){
    result[char] = allChars[char];
  });
  console.log(result);
}
repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');      // { s: 3, e: 2 }