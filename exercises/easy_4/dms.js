const DEGREE_CHAR = String.fromCharCode(176);
const MINUTE_CHAR = "'"
const SECOND_CHAR = '"'

function padZero(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return String(num);
  }
}
function dms(num) {
  let degrees = parseInt(num);
  let minutes = parseInt((num - degrees) * 60);
  let seconds = parseInt((((num - degrees) * 60) - minutes) * 60);

  return degrees + DEGREE_CHAR + padZero(minutes) + MINUTE_CHAR + padZero(seconds) + SECOND_CHAR;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
