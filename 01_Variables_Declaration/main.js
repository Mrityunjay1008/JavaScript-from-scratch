console.log("Hello World!")

// Keywords: let, const, var
// Prefer not to use var

let name = "Gopal" // Value is mutable
const id = 108 // Value is immutable
var profession = "Web Dev" // Value is mutable and global
console.log(name, id, profession)

// Mutable vs Immutable
// Mutable variables can be reassigned
name = "Mrityunjay"
console.log(name)

// Immutable variables cannot be reassigned
// id = 109 // TypeError: Assignment to constant variable.
console.log(id)

// Global variables are accessible from anywhere
profession = "Full Stack Web Dev"
console.log(profession)

console.table([name, id, profession])
