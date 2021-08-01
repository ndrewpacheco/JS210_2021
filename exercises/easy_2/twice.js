function twice(num) {
  let numAsString = String(num);

  if (numAsString.length % 2 === 1) return num * 2;
  let halfLength = numAsString.length / 2;

  let firstHalfOfNum = numAsString.substring(0, halfLength);
  let secondHalfOfNum = numAsString.substring(halfLength);

  return (secondHalfOfNum === firstHalfOfNum) ? num : num * 2;
}

console.log(twice(37))          // 74
console.log(twice(44))          // 44
console.log(twice(334433))     // 668866
console.log(twice(444))         // 888
console.log(twice(107))         // 214
console.log(twice(103103))      // 103103
console.log(twice(3333))        // 3333
console.log(twice(7676))        // 7676