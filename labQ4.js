let checkNumber = (num) => {
  console.log(num)
  while (true) {
    if (num % 2) {
      exit(0)
    } else {
      console.log(num)
      num /= 2
    }
  }
}

checkNumber(arguments[0])
