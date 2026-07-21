let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for (let li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}

let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {

    if (inp.value.trim() === "") {
        return;
    }

    let item = document.createElement("li");

    item.innerText = inp.value;

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    item.appendChild(deleteBtn);

    ol.appendChild(item);

    inp.value = "";

});

ol.addEventListener("click", function (event) {

    if (event.target.nodeName == "BUTTON") {

        let listItem = event.target.parentElement;

        listItem.remove();

        console.log("deleted");

    }

});

function hello(){
    console.log("inside hello function");
    console.log("hello");
}
function demo(){
    console.log("calling hello function");
    hello();
}
console.log("calling demo function");
demo();
console.log("DOne!!,bye");

function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}

setTimeout (() => {
    console.log("TAnya GArg");
},1000);
setTimeout (() => {
    console.log("Android developer");
},2000);
setTimeout (() => {
    console.log("Web developer");
},3000);
console.log("HELLO TANYA MAM...");

let p = document.querySelector("p");

function changecolor(color,delay,){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
          p.style.color = color;
          resolve("color changed");
    },delay);
    });
}
changecolor("red",1000,()=>{
    changecolor("blue",1000);   
});

let promise = new Promise((resolve, reject) => {
    let random = Math.random();

    if (random > 0.5) {
        resolve("Success");
    } else {
        reject("Failure");
    }
});

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });

function fetchData() {

    return new Promise((resolve, reject) => {

        let internet = true;

        setTimeout(() => {

            if (internet) {
                resolve({
                    id: 101,
                    name: "Tanya",
                    role: "Frontend Developer"
                });
            } else {
                reject("No Internet Connection");
            }

        }, 1500);

    });

}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

let p1 = Promise.resolve("HTML");
let p2 = Promise.resolve("CSS");
let p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });

    
new Promise((resolve, reject) => {

    let payment = true;

    if (payment) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }

})
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Transaction Completed");
});

async function greet(){
    return "hello";
}

function deliverBook() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("📚 Book Delivered");
        }, 2000);

    });

}

async function library() {

    console.log("Book Ordered...");

    let result = await deliverBook();

    console.log(result);

    console.log("Start Reading");

}

library();

async function greeting() {

    let message = await Promise.resolve("Good Morning!");

    console.log(message);

}

greeting();

function examResult() {

    return new Promise((resolve, reject) => {

        let passed = false;

        if (passed) {
            resolve("Congratulations! You Passed.");
        } else {
            reject("Better Luck Next Time.");
        }

    });

}

async function checkResult() {

    try {

        let result = await examResult();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

checkResult();

function hello() {
    return new Promise((resolve, reject) => {
        resolve("Hello Tanya");
    });
}

async function greet() {

    let result = await hello();

    console.log(result);

}
greet();

function first() {
    return new Promise((resolve) => {
        resolve("HTML");
    });
}

function second() {
    return new Promise((resolve) => {
        resolve("CSS");
    });
}

async function learn() {

    let one = await first();
    console.log(one);

    let two = await second();
    console.log(two);

}

learn();

function myPromise() {

    return new Promise((resolve, reject) => {

        resolve("Success");

        // reject("Error");

    });

}

async function myFunction() {

    let result = await myPromise();

    console.log(result);

}

myFunction();

function checkAge(age) {

    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("Eligible to Vote");
        } else {
            reject("Not Eligible");
        }

    });

}

checkAge(16)
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });

function uploadFile() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            reject("File Upload Failed");

        }, 2000);

    });

}

uploadFile()
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });

let jsonRes = '{"fact":"Cats step with both left legs, then both right legs when they walk or run.","length":74}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

async function getUser() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let data = await response.json();

    console.log(data);
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("City:", data.address.city);
}

getUser();

async function getPost() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    }

}

getPost();


const games = ["Cricket", "Football", "Chess", "Hockey"];

console.log(games);

games.push("Badminton");
games.pop();
games.unshift("Tennis");
games.shift();

console.log(games);const laptop = {
    brand: "Dell",
    processor: "i7",
    ram: "16GB",
    price: 70000
};

console.log(laptop.brand);
console.log(laptop.processor);
console.log(laptop.price);

const ticket = new Promise(function(resolve, reject) {

    var booked = true;

    if (booked) {
        resolve("Ticket Confirmed");
    } else {
        reject("Booking Failed");
    }

});

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    return res.json();
})
.then((data1) => {
    console.log("data1-",data1.fact);
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data2) => {
    console.log("data2",data2.fact);
    return fetch(url);
})
.catch((error)=>{
    console.log("ERROR-",err);
});


let url1 = "https://icanhazdadjoke.com/";
async function getFact(){
    try{
    let res = await fetch (url1);
    let data =await res.json();
    console.log(data.fact);

    let res2 = await fetch (url1);
    let data2 =await res.json();
    console.log(data2.fact);

    }catch(e){
    console.log("error");
    }
}


const button = document.querySelector("button");
const image = document.querySelector("#catImage");
const fact = document.querySelector("#fact");

const factUrl = "https://catfact.ninja/fact";
const imageUrl = "https://api.thecatapi.com/v1/images/search";

button.addEventListener("click", async () => {

    const catFact = await getFact();
    const catImage = await getImage();

    fact.innerText = catFact;
    image.src = catImage;

});

async function getFact() {

    try {

        const response = await axios.get(factUrl);
        return response.data.fact;

    } catch (error) {

        return "Unable to fetch cat fact.";

    }

}

async function getImage() {

    try {

        const response = await axios.get(imageUrl);
        return response.data[0].url;

    } catch (error) {

        return "https://via.placeholder.com/300";

    }

}

let url5 = "https://universities.hipolabs.com/search?name=";
let country = "nepal";
async function getColleges(){
    try{
        let res = await axios.get(country+url);
        console.log(res);
    }catch(e){
        console.log("ERROR",e);
    }
}