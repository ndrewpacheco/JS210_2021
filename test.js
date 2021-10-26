function triangle(num) {
  for (let counter = 0; counter < num; counter += 1) {
    let whitespace = '';
    let stars = '';

    for (whiteCounter = (num - counter) - 1; whiteCounter > 0; whiteCounter -= 1) {
      whitespace += '-';
    }
    do {
      stars += '*'
    } while (stars.length <= counter);


    console.log(whitespace + stars);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********