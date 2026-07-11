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
console.log(colorbar.splice(3));
console.log(colorbar.splice(1,0,"grey","puple"));
console.log(colorbar);
console.log(colorbar.sort());

let numbersystem=[[2,4],[6,8],[10,12]];
console.log(numbersystem);
console.log(numbersystem.length);
console.log(numbersystem[1][1]);



let countries = ["India", "Canada", "Japan", "Australia", "Germany"];

console.log(countries);

countries.push("France");
console.log(countries);

countries.pop();
console.log(countries);

countries.unshift("Nepal");
console.log(countries);

countries.shift();
console.log(countries);

console.log(countries.includes("India"));
console.log(countries.indexOf("Japan"));

let asianCountries = countries.slice(0, 2);
console.log(asianCountries);

countries.splice(2, 1, "Brazil");
console.log(countries);

let moreCountries = ["USA", "Italy"];
let allCountries = countries.concat(moreCountries);
console.log(allCountries);

allCountries.reverse();
console.log(allCountries);

allCountries.sort();
console.log(allCountries);

for (let country of allCountries) {
    console.log(country);
}

console.log("Nested Array Practice");

let ticTacToe = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];

console.log(ticTacToe);

console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);

console.log(ticTacToe[0][0]);
console.log(ticTacToe[1][1]);
console.log(ticTacToe[2][2]);

ticTacToe[1][2] = "X";
console.log(ticTacToe);

for (let row of ticTacToe) {
    console.log(row);
}

for (let i = 0; i < ticTacToe.length; i++) {
    for (let j = 0; j < ticTacToe[i].length; j++) {
        console.log("Row:", i, "Column:", j, "Value:", ticTacToe[i][j]);
    }
}

for(let j=1;j<=10;j++){
    console.log(j);
}

for (let k=1;k<=15;k=k+2){
    console.log(k);
}

console.log("backward");

for (let x=15;x>=1;x=x-2){
    console.log(x)
}

console.log("tables");

for (let t=5;t<=50;t=t+5){
    console.log(t);

}
let n=prompt("write any number for table");
n=parseInt(n);
for(j=n;j<=n*10;j=j+n){
    console.log(j);
}

console.log("Loop Practice");

for (let number = 1; number <= 10; number++) {
    console.log(number);
}

console.log("Even Values");

for (let even = 2; even <= 20; even += 2) {
    console.log(even);
}

console.log("Odd Values");

for (let odd = 1; odd <= 19; odd += 2) {
    console.log(odd);
}

console.log("Table of 9");

for (let multiplier = 1; multiplier <= 10; multiplier++) {
    console.log("9 x " + multiplier + " = " + (9 * multiplier));
}

console.log("Cities");

let cities = ["Delhi", "Mumbai", "Jaipur", "Pune", "Lucknow"];

for (let index = 0; index < cities.length; index++) {
    console.log(cities[index]);
}

console.log("Using For Of");

for (let place of cities) {
    console.log(place);
}

console.log("Nested Loop");

for (let floor = 1; floor <= 3; floor++) {
    console.log("Floor " + floor);

    for (let room = 1; room <= 4; room++) {
        console.log("Room " + room);
    }
}

console.log("Pattern");

for (let row = 1; row <= 5; row++) {
    let pattern = "";

    for (let star = 1; star <= row; star++) {
        pattern += "*";
    }

    console.log(pattern);
}

console.log("While Loop");

let step = 1;

while (step <= 5) {
    console.log(step);
    step++;
}

console.log("Reverse Counting");

let reverse = 5;

while (reverse >= 1) {
    console.log(reverse);
    reverse--;
}

console.log("Do While");

let attempt = 1;

do {
    console.log(attempt);
    attempt++;
} while (attempt <= 5);

console.log("Tables");

for (let table = 2; table <= 5; table++) {

    for (let value = 1; value <= 10; value++) {
        console.log(table + " x " + value + " = " + (table * value));
    }

    console.log("----------------");
}

console.log("Nested Array");

let employees = [
    ["Aman", 23],
    ["Priya", 22],
    ["Rohit", 24]
];

for (let person = 0; person < employees.length; person++) {
    console.log("Name:", employees[person][0]);
    console.log("Age:", employees[person][1]);
}

console.log("Practice Finished");

let g=0;
 while(g<=10){
    console.log(g)
    g++;
 }

let movies = [
    "3 Idiots",
    "Pushpa",
    "Interstellar",
    "Dangal",
    "Kantara"
];

for (let movie of movies) {
    if (movie === "Interstellar") {
        console.log(movie + " is my favourite movie");
    } else {
        console.log(movie);
    }
}
let heroes = [
    ["Iron Man", "Superman", "Wonder Woman"],
    ["Superwoman", "Spider-Man"]
];

for (let l = 0; l < heroes.length; l++) {
    console.log("Group", l + 1, heroes[l]);

    for (let h = 0; h < heroes[l].length; h++) {
        console.log(`Hero ${h + 1}: ${heroes[l][h]}`);
    }
}
console.log("CountriesLoop practice");

let countriesLoop= ["India", "Japan", "Canada", "Australia", "Germany"];

console.log("Using For Loop");

for (let i = 0; i < countriesLoop.length; i++) {
    console.log(countriesLoop[i]);
}

console.log("Using For Of Loop");

for (let country of countriesLoop) {
    console.log(country);
}

console.log("Nested Array with For Loop");

let continentCountries = [
    ["India", "China", "Japan"],
    ["France", "Germany", "Italy"],
    ["USA", "Canada", "Mexico"]
];

for (let i = 0; i < continentCountries.length; i++) {
    console.log("Group", i + 1);

    for (let j = 0; j < continentCountries[i].length; j++) {
        console.log(continentCountries[i][j]);
    }
}

console.log("Nested For Of Loop");

for (let group of continentCountries) {
    console.log("Countries");

    for (let country of group) {
        console.log(country);
    }
}

let clothes=["suit","saare","thsirt"];
for(clothe of clothes){
    console.log(clothe);
}
for(char of "tanyagarg"){
    console.log(char);
}

const std ={
    name:"tanya",
    age:21,
    marks:91
};

const classInfo=
{
    aman:{
        city:"pune",
        grade:"A+",
    },
    harsh:{
        city:"shamli",
        grade:"B",
    },
    Tanya:{
        city:"lucknow",
        grade:"A",
    }
};
console.log("Math Practice");

let numberMaths = 25.78;

console.log(Math.round(numberMaths));
console.log(Math.floor(numberMaths));
console.log(Math.ceil(numberMaths));
console.log(Math.abs(-45));
console.log(Math.pow(3, 4));
console.log(Math.sqrt(81));
console.log(Math.max(12, 45, 78, 23));
console.log(Math.min(12, 45, 78, 23));

console.log(Math.PI);
console.log(Math.E);

let randomValue = Math.random();

console.log(randomValue);

console.log(Math.floor(randomValue * 10));
console.log(Math.floor(randomValue * 100));

let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice:", dice);

let otp = Math.floor(Math.random() * 9000) + 1000;
console.log("OTP:", otp);

let luckyNumber = Math.floor(Math.random() * 50) + 1;
console.log("Lucky Number:", luckyNumber);

let temperature = -18;
console.log(Math.abs(temperature));

let decimal = 19.95;

console.log(Math.floor(decimal));
console.log(Math.ceil(decimal));
console.log(Math.round(decimal));

let markMth = [65, 82, 91, 74, 88];

console.log(Math.max(...markMth));
console.log(Math.min(...markMth));

let randomAge = Math.floor(Math.random() * 43) + 18;
console.log("Random Age:", randomAge);

console.log("Math Practice Completed");