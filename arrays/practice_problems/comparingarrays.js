// function arraysEqual(firstArray, secondArray) {

//   for (let i = 0; i < firstArray.length || i < secondArray.length; i += 1 ) {
//     if (firstArray[i] != secondArray[i]) return false;
//   }

//   return true;
// }


// // console.log(arraysEqual([1], [1]));                               // true
// // console.log(arraysEqual([1], [2]));                               // false
// // console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// // console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// // console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// // console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// // console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false


function firstElementOf(arr) {
  return arr[0];
}

// firstElementOf(['U', 'S', 'A']);  // returns "U"


function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// lastElementOf(['U', 'S', 'A']);  // returns "A"


// function nthElementOf(arr, index) {
//   return arr[index];
// }

// let digits = [4, 8, 15, 16, 23, 42];

// nthElementOf(digits, 3);   // returns 16
// nthElementOf(digits, 8);   // returns undefined
// nthElementOf(digits, -1);  // returns undefined



// function firstNOf(arr, count) {
//   return arr.slice(0, count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// firstNOf(digits, 3);    // returns [4, 8, 15]


// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 1232));    // returns [16, 23, 42]


function endsOf(beginningArr, endingArr) {

  return [firstElementOf(beginningArr), lastElementOf(endingArr)];


}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]