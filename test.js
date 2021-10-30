let today = new Date();

function dateSuffix(date) {
  if ([1, 21, 31].includes(date)) return String(date) + "st";
  if ([2, 22].includes(date)) return String(date) + "nd";
  if ([3, 24].includes(date)) return String(date) + "rd";
  return String(date) + "th";
}

function formattedDay() {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return "Today's day is " + daysOfWeek[today.getDay()] + ", "
}

function formattedMonth() {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()];
}

function formattedDate() {
  return formattedDay() + formattedMonth() + " the " + dateSuffix(today.getDate());
}

// console.log("Today's day is " + daysOfWeek[today.getDay()] + ", " +
//                                 months[today.getMonth()] + " the " +
//                                 dateSuffix(today.getDate()));
console.log(formattedDate());

console.log(today.getYear());
console.log(today.getFullYear());

