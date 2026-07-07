console.log("JS Practice");

let name = "Tanya";
let age = 20;
const college = "ABESIT";
var city = "Delhi";

console.log(name);
console.log(age);
console.log(college);
console.log(city);

console.log(typeof name);
console.log(typeof age);

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(10 + 5 * 2);
console.log((10 + 5) * 2);

console.log(0 / 0);
console.log("abc" * 2);

let marks = 80;

marks += 10;
console.log(marks);

marks -= 5;
console.log(marks);

let count = 1;

count++;
console.log(count);

++count;
console.log(count);

count--;
console.log(count);

console.log(5 == "5");
console.log(5 === "5");

let language = "JavaScript";
console.log("JavaScript");
console.log("JavaScript".length);

console.log(language[0]);
console.log(language[4]);
console.log(language[9]);

let first = "Tanya";
let last = "Garg";

console.log(first + " " + last);

let course = null;
let branch;

console.log(course);
console.log(branch);

console.log(typeof course);
console.log(typeof branch);

let msg = "Hello";

console.log(msg[1]);
console.log(msg[msg.length - 1]);

console.log("Practice Complete");
let x= 25;
let y=85;
console.log("sum is : ",x+y);
let s=2;
let g=10;
console.log(s+g);
console.log(s-g);
console.log(s*g);
console.log(s/g);
console.log(s**g);
console.log(s%g);
console.log(s++);
console.log(++s);
console.log(s+=g);

age=18;
console.log(age<18);
 
console.log('p'<'P');
console.log('A'>'b');

console.log("before my if statement");
let newAge=23;
if (newAge>=18){
    console.log("you can vote");
}
console.log("after my if statement");

let color="green";
if(color="red"){
    console.log("stop");
}
if (color="yellow"){
    console.log("ready");
}
if(color="green"){
    console.log("go");
}


let ageVote=18;
if (ageVote<=18){
    console.log("you can vote");
}else if(ageVote>=33){
    console.log("ypu cannt vote");
}

let marksStd=95;
if(marksStd>=18){
    console.log("pass");
    if (marksStd>=80){
        console.log("Grade:A");
    }else{
        console.log("Grade:B");
    }
}else{
    console.log("fail");
}

let marksTeacher=90;
if(marksTeacher >= 33 || marksTeacher <=80){
    console.log("pass");
    console.log("grade:0");
}
let marksTea=90;
if(marksTea >= 33 && marksTea <=80 || !false){
    console.log("pass");
    console.log("grade:0");
}

if(" "){
    console.log("string is truthy");
}else{
    console.log("String is falsy");
}

let colorl="orange";
switch(colorl){
    case"red":
    console.log("slow down");
    break;
    case"yellow":
    console.log("ready to go");
    break;
    case"green":
    console.log("goooooo");
    default:
    console.log("light is broken");
}
alert("So0methihg is wrong!!");
let Name=prompt("Enter you name");
console.log(Name);