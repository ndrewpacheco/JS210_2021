function join(arr, str) {
  let resultString = '';

  for (let index = 0; index < arr.length; index += 1) {
    resultString += arr[index];
    if (index !== arr.length - 1) {
      resultString += str;
    }
  }

  return resultString;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'