function concat(array1, ...args) {
  let newArr = array1.slice();

  args.forEach(function(arg) {
    if (Array.isArray(arg)) {
      arg.forEach(element => newArr.push(element));
    } else {
      newArr[newArr.length] = arg;
    }
  });

  return newArr;
}


concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]