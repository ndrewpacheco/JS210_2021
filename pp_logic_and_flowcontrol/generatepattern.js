function generatePattern(nStars) {
  for (let counter = 1; counter <= nStars; counter += 1) {
    let output = [];
    for (let num = 1; num <= counter; num += 1) {
      output.push(num)
    }

    let stars = nStars - counter;
    do {
      output.push('*');
      stars -= 1;
    } while (stars >= 0)

    console.log(output.join(''));
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567