let today = new Date();
let tomorrow = new Date(today.getTime());


function dateSuffix(date) {
  if ([1, 21, 31].includes(date)) return String(date) + "st";
  if ([2, 22].includes(date)) return String(date) + "nd";
  if ([3, 24].includes(date)) return String(date) + "rd";
  return String(date) + "th";
}

function formattedDay(day) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return "Today's day is " + daysOfWeek[day.getDay()] + ", "
}

function formattedMonth(day) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[day.getMonth()];
}

function formattedDate(day) {
  return formattedDay(day) + formattedMonth(day) + " the " + dateSuffix(day.getDate());
}

// console.log("Today's day is " + daysOfWeek[today.getDay()] + ", " +
//                                 months[today.getMonth()] + " the " +
//                                 dateSuffix(today.getDate()));
console.log(formattedDate(tomorrow.setDate(32)));


