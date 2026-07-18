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