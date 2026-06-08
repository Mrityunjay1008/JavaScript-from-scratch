let score = "33"

console.log(typeof score)

let scoreNumber = Number(score)

console.log(typeof scoreNumber)

let newScore = "3431afsfhfskfsk"

let newScoreNumber = Number(newScore) // NaN: Not a Number

console.log(typeof newScoreNumber)
console.log(newScoreNumber)

// 33 -> Number
// "33" -> type number but value NaN

let isLoggedIn = 1

let isLoggedInBoolean = Boolean(isLoggedIn)

console.log(typeof isLoggedInBoolean)
console.log(isLoggedInBoolean)

let newIsLoggedIn = 867566

isLoggedInBoolean = Boolean(newIsLoggedIn) 

console.log(typeof isLoggedInBoolean)
console.log(isLoggedInBoolean)

console.log(Boolean(-2))

// 1 => true
// 0 => false

// any non zero number => true
// only 0 => false

let someNumber = 66
let stringNumber = String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber)