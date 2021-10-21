function gcd(num1, num2) {
  let denominator;
  let largestNum  = num1 > num2 ? num1 : num2;

  for (let counter = 1; counter <= largestNum; counter += 1) {
    if (num1 % counter == 0 && num2 % counter == 0) denominator = counter;
  }

  return denominator;
}

console.log(gcd(12, 4));  // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));  // 1