let isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let counter = 2; counter < num; counter += 1) {
    if (num % counter == 0) {
      return false;
    }
  }
  return true;
}


function checkGoldbach(expectedSum) {
  // iterate from 1 up to half of expected sum
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    return console.log(null);
  }

  for (let firstNumber = 2; firstNumber < expectedSum; firstNumber += 1) {
    let secondNumber = expectedSum - firstNumber;
    if (firstNumber > secondNumber) {
      break;
    }
    if (isPrime(firstNumber) && isPrime(secondNumber)) {
      console.log(firstNumber, secondNumber);
    }


  }
}

checkGoldbach(3);
// // logs: null

checkGoldbach(4);
// // logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53