let body = document.body;
let nav = document.createElement("nav");

let homeDiv = document.createElement("div");
homeDiv.innerHTML = "Home";

let AboutDiv = document.createElement("div");
AboutDiv.innerHTML = "About";

let ContactDiv = document.createElement("div");
ContactDiv.innerHTML = "Contact";

let LoginDiv = document.createElement("div");
LoginDiv.innerHTML = "Login";

nav.append(homeDiv, AboutDiv, ContactDiv, LoginDiv);
body.append(nav);

nav.style.cssText = "border: 1px solid white; display: flex;";

const itemStyle = "border: 1px solid white; padding: 5px 10px; flex: 1; text-align: center; background-color: teal; color: white;";

homeDiv.style.cssText = itemStyle;
AboutDiv.style.cssText = itemStyle;
ContactDiv.style.cssText = itemStyle;
LoginDiv.style.cssText = itemStyle;

console.log(nav.style.getPropertyValue("border"));
console.log(nav.style.getPropertyValue("display"));
console.log(nav.style.getPropertyValue("text-align"));

console.log(homeDiv.style.getPropertyValue("border"));
console.log(homeDiv.style.getPropertyValue("padding"));
console.log(homeDiv.style.getPropertyValue("background-color"));

homeDiv.style.removeProperty("text-align");





