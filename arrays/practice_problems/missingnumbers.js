function missing(arr) {
  let resultArr = [];

  for (let counter = arr[0]; counter <= arr[arr.length - 1]; counter += 1) {
    if (arr.includes(counter)) continue;
    resultArr.push(counter);
  }
  return resultArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []