// Write a function that logs the integers from 1 to 100 (inclusive)
// that are multiples of either 3 or 5.
// If the number is divisible by both 3 and 5, append an "!" to the number.



function multiplesOfThreeAndFive() {
  for (let counter = 1; counter < 100; counter += 1) {
    if (counter % 3 == 0 && counter % 5 == 0) {
      console.log(counter + '!');
    } else if (counter % 3 == 0 || counter % 5 == 0) {
        console.log(String(counter));
      }
  }
}



multiplesOfThreeAndFive();

// output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
// … remainder of output omitted for brevity
