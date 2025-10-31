let body = document.body;

function greet() {
    console.log("Hello Everyone");
}

let h1tag = document.getElementById("h1tag");
function applycolor() {
    if (h1tag) h1tag.style.cssText = "background-color: crimson;";
}

function removecolor() {
    if (h1tag) h1tag.style.cssText = "";
}

function addNewBox() {
    let addBtn = document.getElementById("addbtn");
    console.log(addBtn);

    // ~ create p tag 
    let p = document.createElement("p");

    // ~ add text
    p.innerHTML = "I am new product box";

    // ~ add css
    p.style.cssText = "text-align: center; padding: 10px; background: #f2f2f2; margin: 8px 0;";

    // append to body (or a container if you have one)
    document.body.appendChild(p);
}