let shift = (arr, value) => {
  let shiftElement = arr[0];
  for (index = 0; index < arr.length; index += 1) {
    arr[index] = arr[index + 1];
  }
  arr.length -= 1;
  return shiftElement;

}


let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]