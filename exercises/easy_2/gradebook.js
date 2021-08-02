
function getGrade(grade1, grade2, grade3) {
  let averageGrade = findAverage(grade1, grade2, grade3);

  if (averageGrade >= 90) {
    console.log('A');
  } else if (averageGrade >= 80) {
    console.log('B');
  } else if (averageGrade >= 70) {
    console.log('C');
  } else if (averageGrade >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }

}

function findAverage(grade1, grade2, grade3) {
  return  (grade1 + grade2 + grade3) / 3;
}
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'