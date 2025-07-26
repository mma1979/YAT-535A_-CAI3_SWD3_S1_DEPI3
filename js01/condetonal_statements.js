// if(condition){} else{}
var age = 15;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if(condition1){} else if(condition2){}else if(condition3){}else{}
var score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// switch statement
switch (score) {
    case 100:
        console.log("Perfect score!");
        var message = "You nailed it!";
        console.log(message);
        break;
    case 90:
        console.log("Great job!");
        break;
    case 80:
        console.log("Good effort!");
        break;
    default:
        console.log("Keep trying!");
        break;
}
