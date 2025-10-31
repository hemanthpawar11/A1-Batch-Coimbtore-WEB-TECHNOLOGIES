let body = document.body;
let section = document.createElement("section");

// creating div tags for this red, orange, yellow, green, blue, indigo and violet colors.
let red = document.createElement("div");
let orange = document.createElement("div");
let yellow = document.createElement("div");
let green = document.createElement("div");
let blue = document.createElement("div");
let indigo = document.createElement("div");
let violet = document.createElement("div");

// append all div's into section tag
section.append(red, orange, yellow, green, blue, indigo, violet);

body.append(section);
console.log(section);

// apply css
section.style.cssText =
    `height: 100vh;
    width: 100vw;
    display: flex;`;

red.style.cssText = `border:solid white; background-color:white; flex:1;`;
orange.style.cssText = `border:solid white; background-color:white; flex:1;`;
yellow.style.cssText = `border:solid white; background-color:white; flex:1;`;
green.style.cssText = `border: solid white; background-color:white; flex:1;`;
blue.style.cssText = `border:solid white; background-color:white; flex:1;`;
indigo.style.cssText = `border:solid white; background-color:white; flex:1;`;
violet.style.cssText = `border:solid white; background-color:white; flex:1;`;

// apply mouseover events
red.addEventListener("mouseover", () => {
    console.log("hovered on red box");
    red.style.cssText += `border:solid red; background-color:red; flex:1; transition: 0s;`;
});

orange.addEventListener("mouseover", () => {
    console.log("hovered on orange box");
    orange.style.cssText += `border:solid orange; background-color: orange; flex: 1; transition:0s;`;
});

yellow.addEventListener("mouseover", () => {
    yellow.style.cssText += `border:solid yellow; background-color:yellow; flex:1; transition:0s;`;
});

green.addEventListener("mouseover", () => {
    green.style.cssText += `border: solid green; background-color:green; flex:1; transition:0s;`;
});

blue.addEventListener("mouseover", () => {
    blue.style.cssText += `border:solid blue; background-color:blue; flex:1; transition:0s;`;
});

indigo.addEventListener("mouseover", () => {
    indigo.style.cssText += `border: solid indigo; background-color:indigo; flex:1; transition:0s;`;
});

violet.addEventListener("mouseover", () => {
    violet.style.cssText += `border: solid violet; background-color:violet; flex:1; transition:0s;`;
});

// apply mouseout events
red.addEventListener("mouseout", () => {
    console.log("unhovered on red box");
    red.style.cssText += `border: solid white; background-color:white; flex:1`;
});

orange.addEventListener("mouseout", () => {
    orange.style.cssText += `border: solid white; background-color:white; flex:1;`;
});

yellow.addEventListener("mouseout", () => {
    yellow.style.cssText += `border:solid white; background-color:white; flex:1;`;
});

green.addEventListener("mouseout", () => {
    green.style.cssText += `border:solid white; background-color:white; flex:1;`;
});

blue.addEventListener("mouseout", () => {
    blue.style.cssText += `border: solid white; background-color:white; flex:1;`;
});

indigo.addEventListener("mouseout", () => {
    indigo.style.cssText += `border:solid white; background-color:white; flex:1;`;
});

violet.addEventListener("mouseout", () => {
    violet.style.cssText += `border:solid white; background-color:white; flex:1;`;
});
