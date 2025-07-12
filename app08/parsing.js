var age = "20"; // This will cause an error if used in arithmetic operations
var parsedge = parseInt(age)
var invoiceTotal="100.50"; // This is a string representation of a number
var parsedInvoiceTotal = parseFloat(invoiceTotal); // Convert string to float
console.log(parsedge); // This will log NaN because "twenty" cannot be parsed as an integer



if (parsedge > 18 && !isNaN(parsedge)) { // > < <= => ==
    console.log("You are an adult.");
} else if(parsedge <= 18 && !isNaN(parsedge)) {
    console.log("You are not an adult.");
} else {
    console.log("Invalid age.");
}

var totalMrks =380;
var percentage = (totalMrks / 500) * 100; // Assuming total marks

console.log("Percentage: " + percentage + "%");

if(percentage >= 90) {
    console.log("Grade: A+");
} else if(percentage >= 80 && percentage < 90) { 
    console.log("Grade: A");
} else if(percentage >= 70 && percentage < 80) {
    console.log("Grade: B");
} else if(percentage >= 60 && percentage < 70) {
    console.log("Grade: C");
} else if(percentage >= 50 && percentage < 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

var condition1 = true;
var condition2 = false;
console.log(condition1 && condition2); // Logical AND true && true = true, false && true = false
console.log(condition1 || condition2); // Logical OR true || ? = true, false &&t false = false
console.log(!condition1); // Logical NOT !true = false, !false = true
console.log(!condition2); // Logical NOT !true = false, !false = true
console.log(condition1 && !condition2); // Logical NOT true && !false = true, false && !true = false

