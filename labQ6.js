// 6. Write an arrow function which calculate the sum of marks provided in an array, average it and
// also show Grade. Follow Grading Policy.

let marks = [80, 80, 95, 77, 87]
let calculateMarks = (marks) => {
  let sum = 0

  for (let m in marks) {
    sum += marks[m]
  }
  let avg = sum / marks.length
  console.log(avg)
  console.log(marks.length)
  if (avg > 90) console.log('Grade A')
  else if (avg >= 80) console.log('Grade B')
  else if (avg >= 70) console.log('Grade C')
  else if (avg >= 60) console.log('Grade D')
  else if (avg >= 50) console.log('Grade E')
  else console.log('Grade F')
}

calculateMarks(marks)
