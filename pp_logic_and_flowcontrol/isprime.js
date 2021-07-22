let isPrime = (num) => {
  if (num < 2) {
    return console.log(false);
  }

  for (let counter = 2; counter < num; counter += 1) {
    // console.log(counter);
    if (num % counter == 0) {
      return console.log(false);
    }
  }
  return console.log(true);
};


isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false