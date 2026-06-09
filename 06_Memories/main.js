// Two types of memory in JavaScript
// 1. Heap memory
// 2. Stack memory

// Heap memory
// It is the memory that is allocated dynamically

// Stack memory
// It is the memory that is allocated statically

// All primitive data types are stored in stack memory
// All non-primitive data types are stored in heap memory

// Stack

let a = 'my name is mrityunjay';
let b = a // a is given to b as copy

console.log(a === b) // True

b = 'my name is Gopal'

console.log(a === b) // False

// Heap

const user = {
    name: 'mrityunjay',
    age: 25,
    gender: 'male'
}

const user2 = user // user2 is given user's reference

console.log(user === user2) // true
console.log(user.name, user2.name) // mrityunjay mrityunjay

user.name = 'Gopal'

console.log(user === user2) // True
console.log(user.name, user2.name) // Gopal Gopal