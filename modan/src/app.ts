/* const userName = 'Max';
//userName = 'Maximilian';

let age = 30;

age = 29; */

/* const add = (a: number, b:number = 1) =>  a + b; */

/* const printOutput: (output: string | number) => void = output => {
    console.log(output);
}

printOutput(add(2)); */

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => {
        console.log(event);
    })
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
//activeHobbies.push(hobbies[0],hobbies[1]);

// スプレッド演算子で配列を展開できる
activeHobbies.push(...hobbies);
console.log(activeHobbies);

// オブジェクトにも使える
const person = {
    fname: 'Max',
    age: 30,
};

const copiedPerson = {
    ...person,
};

console.log(copiedPerson);

// レストパラメータ
// 渡された引数が一つの配列としてマージされる
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult,curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


// 分割代入
const [hobby1,hobby2, ...remain] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {fname: userName, age} = person;
console.log(userName, age);

/* function add(a: number, b:number){
    let result;
    result = a + b;
    return result;
} */

/* if(age >= 20) {
    let isAdult = true;
}


console.log(isAdult); */