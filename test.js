function average(values) {

  let total = 0;
  for (let index = 1; index < values.length; index += 1) {
    total += values[index]
  }

  return total / values.length;
}

function sum(a, b, c) {
  return a + b + c;
}
