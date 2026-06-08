"use strict" // It will treat all js code as the new version of ECMA It is not necessary to write
// ECMA historically stands for the European Computer Manufacturers Association

// It will throw an error. we are using nodejs not browser
// alert("Hello World!") 

//This is a very bad practice
console.log("Very very"); console.log("bad practice"); 

// Data types
// Primitive data types
let name = "Gopal" // String 
let age = 108 // Number
let isMarried = false // Boolean
let isHappy = true // Boolean
let empty = null // Null ->  Empty value
let undefined; // Undefined -> value which is not defined
let symbol = Symbol() // Symbol -> Unique value

// typeof operator
console.log(typeof name, typeof age, typeof isMarried, typeof isHappy, typeof empty, typeof undefined, typeof symbol)