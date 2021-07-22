function isXor(first_arg, second_arg) {
  if ((!first_arg  && second_arg) || (!second_arg  && first_arg) ) {
    return console.log(true);
  }
  return console.log(false);
}




isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false