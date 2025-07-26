// declare array
let fruits = ["apple", "banana", "cherry", "date"];
let apple = fruits[0]; // accessing first element
let date = fruits[3]; // accessing fourth element
let dates = fruits[fruits.length - 1]; // accessing last element
let cherry = "cherry2"; // accessing cherry element
let cherryIndex = fruits.indexOf(cherry); // finding index of cherry
console.log("Cherry Index:", cherryIndex); // Cherry Index: 2

if(fruits.indexOf("apple") === -1) {
    console.log("x is not in the array"); // x is not in the array
}else{
    console.log("x is in the array");
}

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]); // Fruit: apple, Fruit: banana, etc.
}

// while loop
let currentIndex = 0;
while(currentIndex < fruits.length){
console.log("Fruit:", fruits[currentIndex]);
    currentIndex++;
}

console.log("Current Index:", currentIndex); // Current Index: 4

// do-while loop
let index = 4;
do{
    console.log("Fruit:", fruits[index]); // Fruit: apple, etc.
    index++;
}while(index < fruits.length);

// declare object
let person = {
    name: "Mohammed",
    age: 30,
    isActive: true,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

console.log("Person Name:", person.name); // Person Name: Alice
console.log("Person Name:", person["name"]); // Person Name: Alice

let people = [
    { name: "Alice", age: 30, isActive: true },
    { name: "Bob", age: 25, isActive: false },
    { name: "Charlie", age: 35, isActive: true }
];

for (let i = 0; i < people.length; i++) {
    console.log("Person Name:", people[i].name); // Person Name: Alice, etc.
    console.log("Person Age:", people[i]["age"]); // Person Name: Alice, etc.
}


person.greet(); // Hello, Alice

let jsonString = JSON.stringify(people);
console.log("JSON String:", jsonString); // JSON String: [{"name":"Alice","age":30,"isActive":true},...]

let str = '[{"name":"Alice","age":30,"isActive":true},{"name":"Bob","age":25,"isActive":false},{"name":"Charlie","age":35,"isActive":true}]';
let people2 = JSON.parse(str);
console.log("Parsed People:", people2[0].name); // Parsed People: [{name: "Alice", age: 30, isActive: true}, ...]

try {
    let invalidJson = '{"name": "Alice", "age": 30, "isActive": true'; // missing closing brace
    let parsedData = JSON.parse(invalidJson);
    console.log("Parsed Data:", parsedData);
} catch (error) {
    console.error("JSON Parsing Error:", error.message); // JSON Parsing Error: Unexpected end of JSON input
}

try {
    let invalidJson = '{"name": "Alice", "age": 30, "isActive": true}'; // missing closing brace
    let parsedData = JSON.parse(invalidJson);
    console.log("Parsed Data:", parsedData);
} catch (error) {
    console.error("JSON Parsing Error:", error.message); // JSON Parsing Error: Unexpected end of JSON input
}finally {
    console.log("This block always executes after try-catch."); // This block always executes after try-catch.
}