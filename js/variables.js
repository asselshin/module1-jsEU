console.log("variables");

console.log(student); // undefined

var student = "Assel";
console.log(student);

var count;
console.log(count); //undefined

count = 1;
console.log(count);

count = 2;
console.log(count);

// console.log(number); //Uncaught ReferenceError: Cannot access 'number' before initialization
let number = 30;
console.log(number);

let age;
console.log(age); // undefined

age = 13;
console.log(age);

// console.log(userName); // Uncaught SyntaxError: Invalid or unexpected token
const userName = "Bobob";
console.log(userName);

// userName = ""; //Uncaught TypeError: Assignment to constant variable.
// const user;//Uncaught SyntaxError: Missing initializer in const declaration
