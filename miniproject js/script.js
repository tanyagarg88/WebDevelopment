// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (let li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

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

function changecolor(color,delay,nextColorChange){
    setTimeout(()=>{
          p.style.color = color;
          if (nextColorChange)nextColorChange();
    },delay);
}
changecolor("red",1000,()=>{
    changecolor("blue",1000);   
});
