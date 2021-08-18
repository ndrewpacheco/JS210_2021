// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: undefined,
// };

// function objectHasProperty(object, propertyName) {
//   let keys = Object.keys(object);
//   return keys.indexOf(propertyName) !== -1;
// }

// // objectHasProperty(pets, 'dog');       // true
// // objectHasProperty(pets, 'lizard');    // false
// // objectHasProperty(pets, 'mice');      // true

// function incrementProperty(object, propertyName) {
//   if (objectHasProperty(object, propertyName)) {
//     return object[propertyName] += 1;
//   } else {
//     return object[propertyName] = 1;
//   }
// }

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// incrementProperty(wins, 'susie');   // 5
// wins;                               // { steve: 3, susie: 5 }
// incrementProperty(wins, 'lucy');    // 1
// wins;                               // { steve: 3, susie: 5, lucy: 1 }


// function copyProperties(objectOne, objectTwo) {
//   let counter = 0;
//   for (let element in objectOne) {

//     objectTwo[element] = objectOne[element]
//     counter += 1;
//   }
//   return counter;
// }


// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }



function wordCount(str) {
  let result = {};
  str.split(' ').forEach(function(word) {
    if (result[word]) {
      result[word] += 1
    } else {
      result[word] = 1;
    }
  })
  return result;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }










