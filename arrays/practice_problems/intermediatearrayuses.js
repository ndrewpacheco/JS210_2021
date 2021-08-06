// function oddElementsOf(arr) {
//   let oddArr = [];

//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (idx % 2 === 1) oddArr.push(arr[idx]);
//   }
//   return oddArr;
// }

// let digits = [4, 8, 15, 16, 23, 42];

// oddElementsOf(digits);    // returns [8, 16, 42]


// function mirrorArray(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[i]);
//   }
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(mirrorArray([1,2,3]));

// function sortDescending(arr) {
//    let newArr =arr.slice();
//    newArr.sort((a, b) => b - a);
//    return newArr;
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]



// function matrixSums(arr) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return arr.map(el => {return el.reduce(reducer)});
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

function uniqueElements(arr) {
  let sortedArr = arr.sort();
  let newArr = [];
  let transitionElement;

  for (i = 0; i < arr.length; i += 1) {
    if (transitionElement === sortedArr[i]) continue;
    newArr.push(sortedArr[i]);
    transitionElement = sortedArr[i];
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

