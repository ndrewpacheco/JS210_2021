function substr(string, start, length) {
  let strLength = string.length;
  let newString = '';
  if (start < 0) start = strLength + start;
  let lastIndex = length + start - 1

  for(let index = start; index <= lastIndex; index += 1) {
    if (index > strLength - 1) break;
    newString += string[index];
  }
  console.log(newString);
}

let string = 'hello.world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

