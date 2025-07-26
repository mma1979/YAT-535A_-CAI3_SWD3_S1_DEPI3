// Arthimtec Operators ( +, -, *, /, %, ** )
var number1 = 10;
var number2 = 6;

console.log("Addition:", number1 + number2); // 16
console.log("Subtraction:", number1 - number2); // 4
console.log("Multiplication:", number1 * number2); // 60
console.log("Division:", number1 / number2); // 1.666666666666
console.log("Modulus:", number1 % number2); // 4 (remainder of division)
console.log("Exponentiation:", number1 ** number2); // 1000000 (10

// logical Operators ( &&, ||, ! )
var isTrue = true;
var isFalse = false;

console.log("Logical AND:", isTrue && isFalse); // false
console.log("Logical AND with Not:", isTrue && !isFalse); // true
console.log("Logical OR:", isTrue || isFalse); // true
console.log("Logical OR with Not:", !isTrue || isFalse); // false
console.log("Logical NOT:", !isTrue); // false
console.log("Logical NOT:", !isFalse); // true

// Comparison Operators ( ==, ===, !=, !==, >, <, >=, <= )
var a = 5;
var b = '5';
var c = 10;
console.log("Equality (==):", a == b); // true (loose equality)
console.log("Strict Equality (===):", a === b); // false (strict equality)
console.log("Inequality (!=):", a != c); // true (loose inequality)
console.log("Strict Inequality (!==):", a !== b); // true (strict inequality
console.log("Greater than (>):", a > c); // false
console.log("Less than (<):", a < c); // true
console.log("Greater than or equal to (>=):", a >= 5); // true
console.log("Less than or equal to (<=):", a <= 5); // true