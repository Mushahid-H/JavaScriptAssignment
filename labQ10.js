// 10. Find the number of occurrences of minimum value in the numbers list and replace all the
// occurrences with -1 value.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1]
let min = arr[0]
let count = 0

let checkMinimum = (arr) => {
  for (let i in arr) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
}
let countMinimum = (arr, min) => {
  for (let i in arr) {
    if (arr[i] === min) {
      count++
    }
  }
}

let replaceMinimum = (arr, min) => {
  for (let i in arr) {
    if (arr[i] === min) {
      arr[i] = -1
    }
  }
}

checkMinimum(arr)
countMinimum(arr, min)
replaceMinimum(arr, min)

console.log('Occurences of Minimum Number: ' + count)
console.log('Array: ' + arr)
