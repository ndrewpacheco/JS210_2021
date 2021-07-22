function logMultiples(num) {
  highestMultiple = parseInt(100 / num);

  for (let counter = highestMultiple; counter >= 0; counter -= 1) {
    if (counter % 2 === 1) {
      console.log(counter * num);
    }
  }
}



logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21