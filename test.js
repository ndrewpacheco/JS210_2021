function substring(string, start, end = string.length) {
  if (start > end) {
    [start, end] = [end, start];
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start === end) {
    return '';
  }

  let result = '';
  for (let index = start; index < end; index += 1) {
    if (index >= string.length) break;
    result += string[index];
  }
  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 2, 2));    // ""
console.log(substring(string, 0, -1));   // ""


console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"