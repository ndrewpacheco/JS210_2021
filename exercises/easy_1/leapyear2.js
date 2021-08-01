function isLeapYear(year) {
  (year < 1752) ? isJulianLeapYear(year) : isGregorianLeapYear(year);
}

function isJulianLeapYear(year) {
  return console.log(year % 4 === 0);
}

function isGregorianLeapYear(year) {
    if (year % 400 === 0) {
    return console.log(true);
  } else if (year % 100 === 0) {
    return console.log(false)
  } else {
    return console.log(year % 4 === 0);
  }
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
console.log('---')
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
console.log('---')
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
console.log('---')
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true