
// Note that repeatedCharacters does a bit more than simply count the frequency of each character:
// it determines the counts,
// but only returns counts for characters that have a count of 2 or more.
// It also ignores the case.

function repeatedCharacters(word) {
  word = word.toLowerCase().split('');
  let result = {};

  word.forEach(function(char) {
    if (char in result === false) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }

});
word.forEach(function(char) {
    if (result[char] < 2) delete result[char];
 });

  console.log(result);

}
repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
