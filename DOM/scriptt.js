let btn = document.querySelector("button");
console.dir(btn);

function sayhello() {
    alert("Aware!!");
}

btn.onclick = sayhello;
btn.onmouseenter = function(){
    console.log("you enter a button");

}