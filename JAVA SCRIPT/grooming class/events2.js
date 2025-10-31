let body = document.body;

let section = document.createElement("section");
let b1 = document.createElement("button");
let b2 = document.createElement("button");

b1.innerHTML = "Add a square";
b2.innerHTML = "Add a circle";

body.append(b1, b2, section);

section.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

b1.onclick = function () {
  let div = document.createElement("div");
  div.style.cssText = `
    height: 100px;
    width: 100px;
    border: solid;
    background-color: red;
  `;

  div.onmouseover = function () {
    console.log("Cursor moved over square");
    div.style.backgroundColor = "coral";
  };

  div.onmouseout = function () {
    console.log("Cursor moved out from square");
    div.style.backgroundColor = "yellow";
  };

  section.append(div);
};

b2.onclick = function () {
  let div = document.createElement("div");
  div.style.cssText = `
    height: 100px;
    width: 100px;
    border: solid;
    border-radius: 50%;
    background-color: green;
  `;

  div.onmouseover = function () {
    console.log("Cursor moved over circle");
    div.style.backgroundColor = "blue";
  };

  div.onmouseout = function () {
    console.log("Cursor moved out from circle");
    div.style.backgroundColor = "black";
  };

  section.append(div);
};
