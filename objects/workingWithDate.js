function dateSuffix(date) {
  if ([11, 12, 13].includes(date)) return date + "th";

  let compareDate = date % 10;

  switch (compareDate) {
    case 1:
      return date + "st";
      break;
    case 2:
      return date + "nd";
      break;
    case 3:
      return date + "rd";
      break;
    default:
      return date + "th";
      break;
  }
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's day is " + day + ", " + month + " the " + dateSuffix(date.getDate()) );
}

let today = new Date();
formattedDate(today);
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());

console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());