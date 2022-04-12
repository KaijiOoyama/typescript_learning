"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
console.log(e1.name);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// ファンクションオーバーロード
const result = add('hello', 5);
result.split(' ');
// オプショナルチェーン演算子 ?
// 存在するかわからないものの後ろに?をつける
const fetchedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'TypeScript'
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// null合体演算子
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("Start Date " + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('運転中...');
    }
}
class Truck {
    drive() {
        console.log('トラックを運転中...');
    }
    loadCargo(amount) {
        console.log('荷物を載せています...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// 型キャスト
/* const userInputElement = <HTMLInputElement>document.getElementById('user-input'); */
/* const userInputElement = document.getElementById('user-input') as HTMLInputElement; */
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'こんにちは';
}
const errorBag = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザー名に記号を含めることはできません'
};
