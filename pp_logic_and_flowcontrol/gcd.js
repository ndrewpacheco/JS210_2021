function gcd(num1, num2) {

  let smallestNum = num1 < num2 ? num1 : num2;

//
  let factors = [];
  // does factor divide into num1 and num2 easily?
  // if so, push into array

  for (let factor = 1; factor <= smallestNum; factor += 1) {
    if (num1 % factor === 0 && num2 % factor === 0) {
      factors.push(factor)
    }
  }
  console.log(factors[factors.length - 1]);
};




gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1