function reverseSentence(str) {
  console.log(str.split(' ').reverse().join(' '));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"


function reverseWords(words) {
  let result = words.split(' ').map(word => {
    return (word.length >= 5) ? word.split('').reverse().join('') : word;
  })
  console.log(result.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"