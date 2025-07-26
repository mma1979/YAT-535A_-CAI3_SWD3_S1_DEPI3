// consts
const PI = 3.14;
// variables
let userName = "Alice"; // variable that can be reassigned
var userScore = 100; // variable that can be reassigned

function multiply(a, b) {
    let result = a * b;
    const message = "Multiplication Result: " + result;
    return result;
}

function subtract(a, b) {
    console.log("Subtraction:", a - b);
}

var sum = multiply(5, 10);
console.log("Multiplication Result:", sum); // 50

subtract(20, 5); // Subtraction: 15

function sayHello() {
    console.log( "Hello, " )
}