var score = 25; // number
var name = "Jone"; // string
var isActive = true; // boolean true |  false
var x; // undefined
var y = null; // null

// name = 20; // reassigning to a number

// Example of a constant
/*
lll
dfdf
const PI = 3.14; // constant value, cannot be reassigned
// PI = 3.14159; // This would throw an error if uncommented
*/

console.log(typeof score); // number
console.log(typeof name); // string
console.log(typeof isActive); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object (this is a known JavaScript quirk)

// variable naming rules
// 1. Cannot start with a number    
// 2. Cannot contain spaces
// 3. Cannot use reserved keywords (like 'var', 'let', 'const',
// 4. Cannot use special characters except for underscore (_) and dollar sign ($)
// 5. Case-sensitive (e.g., 'name' and 'Name' are different variables)
// 6. Should be descriptive and meaningful
// 7. Use camelCase for multi-word variable names (e.g., 'userName', 'totalScore')

// variable naming cases
// 1. camelCase userName, totalScore
// 2. snake_case user_name, total_score  lowercase with underscores
// 3. kebab-case user-name, total-score (not recommended for variables)
// 4. PascalCase UserName, TotalScore (often used for classes in JavaScript)

const USE_NAME = "John"; // constant variable, cannot be reassigned
let userAge = 30; // variable that can be reassigned
