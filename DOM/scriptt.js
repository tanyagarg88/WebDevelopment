console.log("Click Event");

let clickButton = document.querySelector("button");

clickButton.addEventListener("click", function () {
    console.log("Button Clicked");
});

console.log("Double Click");

let headingText = document.querySelector("h1");

headingText.addEventListener("dblclick", function () {
    console.log("Heading Double Clicked");
});console.log("Mouse Enter");

let imageBox = document.querySelector("img");

imageBox.addEventListener("mouseenter", function () {
    console.log("Mouse Entered Image");
});