const WHITESPACE = ' ';
const STAR = '*';

function triangle(num) {
  for (let i = 1; i <= num; i++) {
    let whitespace = WHITESPACE.repeat(num - i);
    let stars = STAR.repeat(i);

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