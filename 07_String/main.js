const name = "Sharma Ji";
const repo_name = 99

console.log(name + repo_name) // Sharma Ji99

console.log(`Hello ${name}! \nYour repo coutn is ${repo_name}`) 

console.log(name.__proto__)

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.charAt(7))

console.log(name.indexOf('J'))

console.log(name.includes('J'))

new_name = name.replace('Ji', 'Gopal')

console.log(new_name)

new_name = name.slice(0, 4)

console.log(new_name)

console.log(name.trim())   

new_name = name.replace(" ","")

console.log(new_name)

console.table(name.split(""))

name.split("").forEach(element => {
    console.log(element)
})