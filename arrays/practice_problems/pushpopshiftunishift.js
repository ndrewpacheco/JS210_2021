function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

let count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]


function pop(arr) {
  const lastItem = arr[arr.length -1];
  arr.length = arr.length - 1;
  return lastItem;
}

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]


function unshift(arr, item) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arr[i + 1] = arr[i];
  }
  arr[0] = item;
  return arr.length;
}

let count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]


function shift(arr) {
  if (arr.length === 0) return undefined;
  let firstItem = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    arr[i - 1] = arr[i];
  }

  arr.length = arr.length - 1;
  return firstItem;
}

let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]