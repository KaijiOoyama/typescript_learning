const userName = 'Max';
let age:number;
age = 25;

console.log(userName,age);


const button = document.querySelector('button')!;

function clickHandler(message: string) {
    let userName = 'max';
    console.log("Clicked!" + message);
}

button.addEventListener('click',clickHandler.bind(null,'ok'));