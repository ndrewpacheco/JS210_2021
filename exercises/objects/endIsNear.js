function penultimate(string) {
  string = string.split(' ');
  return string[string.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"