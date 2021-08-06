function slice(array, begin, end) {
  let newArr = [];
  let limit = end < array.length ? end : array.length;
  for (let index = begin; index < limit; index += 1) {
    newArr.push(array[index]);
  }
  return newArr;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  let originalLength = array.length;
  let limit = deleteCount < originalLength ? deleteCount : originalLength - 1;
  let newArr = [];


  if (deleteCount === 0 && elements.length > 0) {
    array.length += elements.length;
    for (let index = array.length - 1; index >= start; index -= 1) {
      if (index === start) {
        array[index] = elements[0];
      } else {
        array[index] = array[index - 1];
      }
    }
  } else {
    for (let index = start; index < limit + start; index += 1) {
      newArr.push(array[index]);
      array[index] = elements.shift();
    }
  }
  return newArr;
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]