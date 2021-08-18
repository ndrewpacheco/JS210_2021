// // const MINUTES_PER_HOUR = 60;
// // const HOURS_PER_DAY = 24;
// // const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// // function timeOfDay(deltaMinutes) {
// //   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
// //   if (deltaMinutes < 0) {
// //     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
// //   }

// //   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
// //   let minutes = deltaMinutes % MINUTES_PER_HOUR;

// //   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// // }

// const MILLISECONDS_IN_MINUTE = 60000;

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }



// function timeOfDay(minutes) {

//   let date = new Date(minutes * MILLISECONDS_IN_MINUTE);
//   let hours = date.getUTCHours();
//   let newMinutes = date.getUTCMinutes();

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(newMinutes, 2)}`;

// }

// console.log(timeOfDay(0));          // "00:00"
// console.log(timeOfDay(-3));         // "23:57"
// console.log(timeOfDay(35));         // "00:35"
// console.log(timeOfDay(-1437));      // "00:03"
// console.log(timeOfDay(3000));       // "02:00"
// console.log(timeOfDay(800));        // "13:20"
// console.log(timeOfDay(-4231));      // "01:29"




// /////////////////////////////


// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

function afterMidnight(timeStr) {
  let hours = Number(timeStr.slice(0, 2));
  let date = new Date(`${timeStr}`);
  return date;
};

console.log(afterMidnight('00:00'));       // 0
// console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
// console.log(beforeMidnight('12:34'));      // 686