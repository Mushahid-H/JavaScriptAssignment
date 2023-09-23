// 3. Write a function which checks and prints only the string type properties of an object.

function check(obj) {
  for (let vals in obj) {
    if (typeof obj[vals] == 'string') {
      console.log(vals)
    }
  }
}
let obj = {
  name: 'abc',
  age: 23.5,
  city: 'karachi',
  no: 123456789,
}

check(obj)
