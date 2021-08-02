// iterate through each char
// if it is a nonalpha AND isPreviousCharAlpha is true; sub it for a whitespace
//   mark isPreviousCharNonAlpha to false;

// if it is a nonalpha AND isPreviousCharAlpha is false; remove char

// if it is alpha, leave it as is and mark isPreviousCharNonAlpha to true;

const ALPHABET = new RegExp('[a-zA-Z]');
const WHITESPACE = '.';

function cleanUp(str) {
  let isPreviousCharAlpha = true;
  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];

    if (ALPHABET.test(char)) {
      newStr += char;
      isPreviousCharAlpha = true;
    } else {
      if (isPreviousCharAlpha) {
        newStr += WHITESPACE;
        isPreviousCharAlpha = false;
      }
    }
  }
  console.log(newStr);
}


cleanUp("---what's my +*& line?");    // " what s my line "
