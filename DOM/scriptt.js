//let btn = document.querySelector("button");
//console.dir(btn);

//function sayhello() {
 //   alert("Aware!!");
//}

//btn.onclick = sayhello;
//btn.onmouseenter = function(){
 //   console.log("you enter a button");

//}

let actionButton = document.querySelector("button");

actionButton.addEventListener("click", function () {

    let h3 = document.querySelector("h3");

    let randomColor = getRandomColor();

    h3.innerText = randomColor;

    let div = document.querySelector("div");

    div.style.backgroundColor = randomColor;

    console.log("Color Updated");

});

//actionButton.addEventListener("mouseenter", function () {
   // console.log("Mouse Enter");
//});

//actionButton.addEventListener("mouseleave", function () {
  //  console.log("Mouse Leave");
//});

function getRandomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;

}

let h3 = document.querySelector("h3");
let div = document.querySelector("div");

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor ="blue";
}
h3.addEventListener("click",changecolor);
div.addEventListener("click",changecolor);

let input= document.querySelector("input");