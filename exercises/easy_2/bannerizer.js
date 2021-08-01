WHITESPACE = ' ';
HYPHEN = '-';
function logInBox(str) {
  if (str === '') str = WHITESPACE;
  let whiteSpace = extraSpace(str.length, WHITESPACE);
  let dottedLine = extraSpace(str.length, HYPHEN);

  console.log(`+-${dottedLine}-+`);
  console.log(`| ${whiteSpace} |`);
  console.log(`| ${str} |`);
  console.log(`| ${whiteSpace} |`);
  console.log(`+-${dottedLine}-+`);
};

function extraSpace(amount, char) {
  let result = char;
  for (let i = 0; i < amount - 1; i += 1) {
    result += char;
  }
  return result;
}


logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+