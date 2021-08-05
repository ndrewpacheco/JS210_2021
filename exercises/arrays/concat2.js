function concat() {
  let resultArr = []
  for (let i = 0; i < arguments.length; i += 1) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach((element) => {resultArr.push(element)});
    } else {
      resultArr.push(arguments[i]);
    }
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]