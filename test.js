// Book:Flow Control Exercises

// false || (true && false);
// true || (1 + 2);
// (1 + 2) || true;
// true && (1 + 2);
// false && (1 + 2);
// (1 + 2) && true;
// (32 * 4) >= 129;
// false !== !true;
// true === 4;
// false === (847 === '847');
// false === (847 == '847');
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

function evenOrOdd(num) {

  num % 2 === 0 ? console.log('even') : console.log('odd')

}

evenOrOdd(3);
evenOrOdd(4);