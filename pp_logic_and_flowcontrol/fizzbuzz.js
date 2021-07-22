function fizzbuzz() {
  for (let counter = 1; counter < 100; counter += 1) {
    if (counter % 3 == 0 && counter % 5 == 0) {
      console.log("FizzBuzz");
    } else if (counter % 3 == 0) {
      console.log("Fizz");
    } else if (counter % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(String(counter));
    }
  }
}

fizzbuzz();

// // console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// // … rest of output omitted for brevity