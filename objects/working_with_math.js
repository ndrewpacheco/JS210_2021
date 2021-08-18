

function radiansToDegrees(radian) {

// 1 radian equals 57.2958 degrees

// To go from radians to degrees: multiply by 180, divide by π


  return (radian * 180) / Math.PI;
  // return degree
}


// e. For this problem, create a variable with a value of -180, then use Math.abs to
// log the positive value of the variable.

let vari = -180;
Math.abs(vari);


let a = 50.72;
let b = 49.2;
let c = 49.86;

Math.floor(a);
Math.ceil(b);
Math.round(c);


function getRandomIntInclusive(min, max) {
  let sortedNumbers = [min, max].sort();


  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}