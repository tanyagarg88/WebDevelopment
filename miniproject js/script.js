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