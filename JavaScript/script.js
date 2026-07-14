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


function helloyy(){
    console.log("helloyy");
}
helloyy();

function printPoem() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}

printPoem();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Dice Value:", dice);
}

rollDice();
rollDice();
rollDice();


function printNme(name){
    console.log(name);
}
printNme("tanyaa");

function sayHello(userName) {
    console.log("Hello " + userName);
}

sayHello("Tanya");
sayHello("Rahul");

function sumission(a,b){
    console.log(a+b);
}
sumission(1,2);
sumission(4,50);
sumission(9,60);
sumission(7,8);
sumission(3,2);

function isAdult(age){
    if(age<18){
        return "adult";
    }else{
        return "not adult";
    }
}
isAdult(41);


function checkNumber(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkNumber(12);
checkNumber(19);

function favouriteMovie(movieName) {
    console.log("My favourite movie is " + movieName);
}

favouriteMovie("3 Idiots");
favouriteMovie("Interstellar");

let summ=function(a,b){
    return a+b;
}

function multiplegreet(funct,count){
    for(let i=1;i<=count;i++){
        funct();
    }
}
let greet = function(){
    console.log("greetings");
}
multiplegreet(greet,5);

let collegeCity = "Ghaziabad";

if (true) {
    let classroom = "CSE-2";
    console.log(classroom);
}

console.log(collegeCity);

console.log("Lexical Scope");

let teacher = "Ankit Sir";

function classRoom() {

    let subject = "JavaScript";

    function attendance() {
        console.log(teacher);
        console.log(subject);
    }

    attendance();
}

classRoom();

function calculateBill(price, quantity) {
    let totalBill = price * quantity;
    console.log("Total Bill =", totalBill);
}

calculateBill(250, 4);
calculateBill(120, 2);

let sayWelcome = function () {
    console.log("Welcome to JavaScript Practice");
};

sayWelcome();

function repeatMessage(action, count) {

    for (let step = 1; step <= count; step++) {
        action();
    }

}

function greetFriend() {
    console.log("Good Morning");
}

repeatMessage(greetFriend, 3);

console.log("Higher Order Function Return");

function calculator(choice) {

    if (choice === "square") {

        return function (value) {
            console.log(value * value);
        };

    }

    return function (value) {
        console.log(value * value * value);
    };

}

let squareValue = calculator("square");
squareValue(8);

let cubeValue = calculator("cube");
cubeValue(4);console.log("Methods");

let employee = {

    employeeName: "Tanya",
    department: "Development",

    introduce() {
        console.log("Hello, I am " + this.employeeName);
    },

    showDepartment() {
        console.log("Department:", this.department);
    }

};

employee.introduce();
employee.showDepartment();

const Studnt={
    name:"tanvi",
    age:6,
    maths:45,
    eng:67,
    getAvg(){
        console.log(this);
        let avg =(maths+eng)/2;
        console.log(avg);
    }
}

console.log("This Keyword");

let employeeInfo = {

    employeeName: "Tanya",
    employeeRole: "Frontend Developer",

    introduce() {
        console.log("Name:", this.employeeName);
        console.log("Role:", this.employeeRole);
    },

    updateRole(newRole) {
        this.employeeRole = newRole;
        console.log("Updated Role:", this.employeeRole);
    }

};

employeeInfo.introduce();

employeeInfo.updateRole("Flutter Developer");

employeeInfo.introduce();

console.log("Try Catch Example");

try {
    console.log(studentName);
} catch (error) {
    console.log("Variable not found");
}

console.log("Division Example");

try {
    let firstValue = 100;
    let secondValue = 0;

    if (secondValue === 0) {
        throw "Division by zero is not allowed";
    }

    console.log(firstValue / secondValue);

} catch (error) {
    console.log(error);
}

console.log("Calculation Finished");

const sub =(a,b)=>{
    console.log(a+b);
};

console.log("hii there");
setTimeout( ()=> {
    console.log("Apna adda");
},2000);
console.log("welcome to");

console.log("Arrow Function");

const showGreeting = () => {
    console.log("Welcome to JavaScript");
};

showGreeting();

const multiplyNumbers = (firstValue, secondValue) => {
    console.log(firstValue * secondValue);
};

multiplyNumbers(8, 6);

console.log("Implicit Return");

const findSquare = numberValue => numberValue * numberValue;

console.log(findSquare(9));

const welcomeUser = userValue => "Hello " + userValue;

console.log(welcomeUser("Tanya"));

console.log("setTimeout Example");

setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

console.log("Waiting...");

console.log("setInterval Example");

let timerCount = 1;

let timer = setInterval(() => {
    console.log("Timer:", timerCount);
    timerCount++;

    if (timerCount > 5) {
        clearInterval(timer);
    }

}, 1000);

console.log("This with Arrow Function");

let profileInfo = {

    fullName: "Tanya",

    normalFunction() {
        console.log("Normal:", this.fullName);
    },

    arrowFunction() {
        setTimeout(() => {
            console.log("Arrow:", this.fullName);
        }, 1000);
    }

};

profileInfo.normalFunction();
profileInfo.arrowFunction();

console.log("Student Marks");

const calculateAverage = (markOne, markTwo, markThree) => {
    let averageMarks = (markOne + markTwo + markThree) / 3;
    console.log("Average:", averageMarks);
};

calculateAverage(85, 92, 78);

console.log("Eligibility Check");

const checkEligibility = personAge => {

    if (personAge >= 18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible");
    }

};

checkEligibility(21);
checkEligibility(15);

console.log("Select by ID");

let headingElement = document.getElementById("heading");

console.log(headingElement);
console.dir(headingElement);

console.log("Select by Class");

let cardItems = document.getElementsByClassName("card");

console.log(cardItems);
console.log(cardItems.length);

console.log("Select by Tag");

let paragraphList = document.getElementsByTagName("p");

console.log(paragraphList);

for (let paragraph of paragraphList) {
    console.log(paragraph);
}

console.log("Query Selector");

let firstButton = document.querySelector("button");

console.log(firstButton);

console.log("Query Class");

let firstCard = document.querySelector(".card");

console.log(firstCard);

console.log("Query Selector All");

let allImages = document.querySelectorAll("img");

console.log(allImages);

for (let imageItem of allImages) {
    console.log(imageItem);
}

console.log("Links");

let navigationLinks = document.querySelectorAll("a");

for (let singleLink of navigationLinks) {
    console.log(singleLink);
}

console.log("DOM Practice");

let pageTitle = document.querySelector("h1");
let firstParagraph = document.querySelector("p");
let allButtons = document.querySelectorAll("button");

console.log(pageTitle);
console.log(firstParagraph);

allButtons.forEach(buttonItem => {
    console.log(buttonItem);
});

console.log("Style Property Practice");

let titleElement = document.querySelector("h1");

titleElement.style.color = "blue";
titleElement.style.backgroundColor = "lightyellow";
titleElement.style.textAlign = "center";
titleElement.style.fontSize = "40px";
titleElement.style.border = "2px solid black";
titleElement.style.padding = "10px";

let firstParagraph = document.querySelector("p");

firstParagraph.style.color = "green";
firstParagraph.style.fontWeight = "bold";
firstParagraph.style.fontSize = "20px";

let actionButton = document.querySelector("button");

actionButton.style.backgroundColor = "black";
actionButton.style.color = "white";
actionButton.style.padding = "10px 20px";
actionButton.style.borderRadius = "8px";
actionButton.style.cursor = "pointer";

let pageBody = document.querySelector("body");

pageBody.style.backgroundColor = "#f5f5f5";

console.log("Style Updated");let imageBox = document.querySelector("img");

imageBox.style.width = "250px";
imageBox.style.height = "250px";
imageBox.style.borderRadius = "15px";
imageBox.style.border = "4px solid purple";

console.log("ClassList Practice");

let headingBox = document.querySelector("h1");

headingBox.classList.add("highlight");
console.log(headingBox.classList);

headingBox.classList.remove("highlight");
console.log(headingBox.classList);

headingBox.classList.add("title");

console.log(headingBox.classList.contains("title"));

headingBox.classList.toggle("active");
console.log(headingBox.classList);

headingBox.classList.toggle("active");
console.log(headingBox.classList);

console.log("Button Class");

let submitButton = document.querySelector("button");

submitButton.classList.add("btn");
submitButton.classList.add("success");

console.log(submitButton.classList);

submitButton.classList.remove("success");

console.log(submitButton.classList);

console.log("DOM Navigation");

let pageHeading = document.querySelector("h1");

console.log(pageHeading.parentElement);

console.log(pageHeading.nextElementSibling);

let pageBody = document.querySelector("body");

console.log(pageBody.firstElementChild);

console.log(pageBody.lastElementChild);

console.log(pageBody.children);

console.log("Create Heading");

let headingOne = document.createElement("h2");

headingOne.innerText = "Learning JavaScript DOM";

document.body.append(headingOne);

console.log("Create Paragraph");

let paragraphOne = document.createElement("p");

paragraphOne.innerText = "DOM Manipulation Practice";

document.body.append(paragraphOne);

console.log("Before Example");

let titleText = document.createElement("h3");

titleText.innerText = "Frontend Development";

let heading = document.querySelector("h1");

heading.before(titleText);


console.log("Remove Button");

let removeButton = document.querySelector("button");

removeButton.remove();

console.log("Remove List Item");

let removeItem = document.querySelector("li");

removeItem.remove();

console.log("DOM Practice");

let newHeading = document.createElement("h2");
newHeading.innerText = "DOM Practice";
document.body.append(newHeading);

let newButton = document.createElement("button");
newButton.innerText = "Submit";
document.body.append(newButton);

let newParagraph = document.createElement("p");
newParagraph.innerText = "Learning DOM is interesting.";
document.body.append(newParagraph);

newParagraph.remove();