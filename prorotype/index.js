// Array

const arr = ["Harsh", "Chaudhary"]

console.log(arr.__proto__);
// is Same as
console.log(Array.prototype)

console.log(arr.__proto__.__proto__);
// is same as 
console.log(Object.prototype)


// Function

const fn = () => {

}

console.log(fn.__proto__)
// same as 
console.log(Function.prototype)

console.log(fn.__proto__.__proto__)
// same as 
console.log(Object.prototype)


// Object

const obj = {
    name: "Harsh"
}

console.log(obj.__proto__);
// same as 
console.log(Object.prototype)

console.log(obj.__proto__.__proto__);
// is null