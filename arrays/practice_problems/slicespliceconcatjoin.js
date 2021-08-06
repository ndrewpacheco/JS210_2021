function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr) {
  const lastItem = arr[arr.length -1];
  arr.length = arr.length - 1;
  return lastItem;
}

function slice(arr, startIdx, endIdx) {
  let newArr = [];

  for (let i = startIdx; i < endIdx; i += 1) {
    push(newArr, arr[i]);
  }

  return newArr;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                    // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

function splice(arr, startIdx, amount) {
  let newArr = [];

  for (let i = startIdx; i < (amount + startIdx); i += 1) {
    push(newArr, arr[i]);
    arr[i] = arr[i + amount];
  }

  arr.length = arr.length - amount;
  return newArr;

}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]



function concat(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    push(newArr, arr1[i]);
  }

   for (let i = 0; i < arr2.length; i += 1) {
    push(newArr, arr2[i]);
  }

  return newArr;
}


// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]






function join(arr, separator) {
  let newStr = '';

  for (let i = 0; i < arr.length - 1; i += 1) {
    newStr += arr[i] + separator;
  }

  newStr += arr[arr.length - 1];
  return newStr;
}





console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

