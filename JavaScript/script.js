console.log("JavaScript Basics");

let studentName = "Tanya";
let studentAge = 20;
const collegeName = "ABESIT";
var city = "Delhi";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);
console.log(city);

console.log(typeof studentName);
console.log(typeof studentAge);

let num1 = 25;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** 2);

console.log(15 + 5 * 2);
console.log((15 + 5) * 2);

console.log(0 / 0);
console.log("abc" * 5);

let marks = 75;

marks += 15;
console.log(marks);

marks -= 10;
console.log(marks);

let counter = 1;

counter++;
console.log(counter);

++counter;
console.log(counter);

counter--;
console.log(counter);

console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 > 5);
console.log(5 <= 3);

let language = "JavaScript";

console.log(language);
console.log(language.length);
console.log(language[0]);
console.log(language[4]);
console.log(language[language.length - 1]);

let firstName = "Tanya";
let lastName = "Garg";

console.log(firstName + " " + lastName);

let course = null;
let branch;

console.log(course);
console.log(branch);

console.log(typeof course);
console.log(typeof branch);

let message = "Hello World";

console.log(message[1]);
console.log(message[message.length - 1]);

let age = 20;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

let trafficLight = "green";

if (trafficLight === "red") {
    console.log("Stop");
} else if (trafficLight === "yellow") {
    console.log("Ready");
} else {
    console.log("Go");
}

let score = 92;

if (score >= 33) {
    console.log("Pass");

    if (score >= 80) {
        console.log("Grade A");
    } else {
        console.log("Grade B");
    }
} else {
    console.log("Fail");
}

let attendance = 90;

if (attendance >= 75 && score >= 33) {
    console.log("Eligible for exam");
}

if (attendance >= 75 || score >= 95) {
    console.log("Condition satisfied");
}

console.log(!true);
console.log(!false);

let color = "yellow";

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Signal not working");
}

if ("JavaScript") {
    console.log("String is truthy");
}

alert("Welcome to JavaScript!");

let user = prompt("Enter your name");

console.log("Hello " + user);

console.log("hellooo");

let mess=" hello   ";
let newmess=mess.trim();
console.log(newmess);
console.log(mess.toUpperCase());

let str="i love india";
console.log(str.indexOf("love"));
console.log(str.indexOf("live"));

let Message="Tanyagarg";
let newMessage=message.trim().toUpperCase();
console.log(newMessage);
console.log(Message.slice(-3));
console.log(Message.replace("Tanya","hhih"));
console.log(Message.repeat(10));

let students=["tanya","aditi","manvi","uttkarsh"];
console.log(students);
console.log(students.length);


let cars=["audi","BMw"];
console.log(cars.push("toyota"));
console.log(cars.pop());
console.log(cars.unshift("ferrari"));
console.group(cars.shift());

let monuments=["redfort","tajmahal","killa"];
let Beaches=["goa","bali"];
console.log(monuments.indexOf("tajmahal"));
console.log(monuments.includes("rajasthan"));
console.log(monuments.concat(Beaches));
console.log(monuments.reverse());

let colorbar=["red","yellow","orange","green","white"];
console.log(colorbar.slice());
console.log(colorbar.slice(1,3));