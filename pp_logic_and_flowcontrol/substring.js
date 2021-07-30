function substring(string, start, end ) {
  let strLength = string.length;
  let newString = '';

  if (start < 0 || typeof start !== 'number') start = 0;
  if (end < 0) end = 0;
  if (end === undefined || end > string.length) end = strLength;
  if (start > end) [start, end] = [end, start];

  for (let counter = start; counter < end; counter += 1) {
    newString += string[counter];
  }
  console.log(newString);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"