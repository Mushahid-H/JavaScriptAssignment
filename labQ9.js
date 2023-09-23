// Write a function which can check if a given object is empty or not. If not empty, then display all
// the keys as well as values of an object. (Also values of nested objects)

let obj = {
  name: 'Ali',
  age: 20,
  address: {
    city: 'Karachi',
    country: 'Pakistan',
  },
}

let checkEmpty = (obj) => {
  if (Object.keys(obj).length === 0) {
    console.log('Empty')
  } else {
    for (let key in obj) {
      console.log(key, obj[key])
    }
  }
}

checkEmpty(obj)
