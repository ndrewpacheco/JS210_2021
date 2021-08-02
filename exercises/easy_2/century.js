function century(year) {
  let centuryDigit = parseInt(((year - 1) / 100) + 1);
  centuryDigit = String(centuryDigit);

  if (centuryDigit.match(/(11|12|13)$/)) return console.log(centuryDigit + "th");
  if (centuryDigit.match(/1$/)) return console.log(centuryDigit + "st");
  if (centuryDigit.match(/2$/)) return console.log(centuryDigit + "nd");
  if (centuryDigit.match(/3$/)) return console.log(centuryDigit + "rd");
  return console.log(centuryDigit + "th");
}


// to find century digit:
// parseInt(((year - 1) / 100) + 1);

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"