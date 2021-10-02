// let myProtoObj = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let myObj = Object.create(myProtoObj);

function copyObj(obj, arr = []) {
  // if array is empty, return obj
  if (arr.length === 0) return obj;
  newObj = {}
  arr.forEach(element => newObj[element] = obj[element]);
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }