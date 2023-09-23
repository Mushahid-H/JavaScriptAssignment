// 8. Write a function which returns a list of elements which contains at least one character as digit.

let arr = ['Ali', 'Bilal', '123', '123abc', 'abc123', 'abc']

let checkDigit = (arr) => {
  let newArr = []
  for (let i in arr) {
    for (let j in arr[i]) {
      if (arr[i][j] >= 0 && arr[i][j] <= 9) {
        newArr.push(arr[i])
        break
      }
    }
  }
  return newArr
}
console.log(checkDigit(arr))
