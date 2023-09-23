// 5.Write a function which checks given input/parameter:
// a. If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'

// b. If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print
// => 'Speed Limit Crossed by Penalty Point' + Point
// c. If Driver gets more than 10 penalty points ie. above the speed limit 120, print =>
// 'License Suspended'

let checkSpeed = (speed) => {
  let point = 0
  if (speed <= 70) {
    console.log('Good Safe Driving')
  } else if (speed > 70) {
    point = (speed - 70) / 5
    console.log('Speed Limit Crossed by Penalty Point: ' + point)
  } else if (point > 10) {
    console.log('License Suspended')
  }
}

checkSpeed(125)
