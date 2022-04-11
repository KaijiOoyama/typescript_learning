"use strict";
const userName = 'Max';
let age;
age = 25;
console.log(userName, age);
const button = document.querySelector('button');
function clickHandler(message) {
    let userName = 'max';
    console.log("Clicked!" + message);
}
button.addEventListener('click', clickHandler.bind(null, 'ok'));
//# sourceMappingURL=app.js.map