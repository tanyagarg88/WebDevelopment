console.log("JavaScript Basics");

let userName = "Tanya";
let userAge = 20;
const institute = "ABESIT";
var location = "Delhi";

console.log(userName);
console.log(userAge);
console.log(institute);
console.log(location);

console.log(typeof userName);
console.log(typeof userAge);

let num1 = 40;
let num2 = 12;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** 2);

let score = 75;

score += 15;
console.log(score);

score -= 20;
console.log(score);

let value = 5;

console.log(value++);
console.log(value);
console.log(++value);
console.log(value--);
console.log(value);

console.log(20 == "20");
console.log(20 === "20");

let language = "JavaScript";

console.log(language);
console.log(language.length);
console.log(language[0]);
console.log(language[3]);
console.log(language[9]);

let firstName = "Tanya";
let lastName = "Garg";

let fullName = firstName + " " + lastName;
console.log(fullName);

let data = null;
let branch;

console.log(data);
console.log(branch);

console.log(typeof data);
console.log(typeof branch);

let greeting = "Welcome";

console.log(greeting[0]);
console.log(greeting[4]);
console.log(greeting[greeting.length - 1]);

let x = 15;
let y = 25;

console.log("Sum =", x + y);
console.log("Difference =", y - x);
console.log("Product =", x * y);
console.log("Division =", y / x);

console.log(userAge >= 18);
console.log(userAge < 18);

console.log("A" < "B");
console.log("z" > "m");

console.log("Before If Statement");

let age = 22;

if (age >= 18) {
    console.log("Eligible to Vote");
}

console.log("After If Statement");

let signal = "yellow";

if (signal == "red") {
    console.log("Stop");
} else if (signal == "yellow") {
    console.log("Ready");
} else {
    console.log("Go");
}

let marks = 88;

if (marks >= 33) {
    console.log("Pass");

    if (marks >= 80) {
        console.log("Grade A");
    } else {
        console.log("Grade B");
    }
} else {
    console.log("Fail");
}

let attendance = 82;

if (attendance >= 75 && marks >= 33) {
    console.log("Allowed in Exam");
}

if (attendance >= 75 || marks >= 90) {
    console.log("Good Performance");
}

if (!false) {
    console.log("Boolean Check");
}

let text = "";

if (text) {
    console.log("Truthy Value");
} else {
    console.log("Falsy Value");
}

let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Start Working");
        break;

    case "Saturday":
        console.log("Weekend");
        break;

    case "Sunday":
        console.log("Holiday");
        break;

    default:
        console.log("Normal Day");
}

alert("Welcome to JavaScript Practice");

let input = prompt("Enter your favourite language");
console.log("Favourite Language:", input);