function indexOf(arr, item) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1

function lastIndexOf(arr, item) {
  for (let i = arr.length -1; i >= 0; i -= 1) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1