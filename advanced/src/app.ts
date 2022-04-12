// 交差型 複数の型を結合するときに使う
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// オブジェクトの場合、それぞれの定義が結合される
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

console.log(e1.name);

// ユニオン型の場合、共通した部分の型になる
type Combinable = string | number;
type Numeric = number | boolean;

// 共通部分のnumber型になる
type Universal = Combinable & Numeric;

// 型ガード
// 実行時にある値を利用したいときに、特定の型であるかチェックするコードの書き方
// stringかnumberでも動く
// ファンクションオーバーロード
function add(a: string, b:string): string;
function add(a: number, b:number): number;
function add(a: string, b:number): string;
function add(a: number, b:string): string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

// ファンクションオーバーロード
const result = add('hello',5);
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

console.log(fetchedUserData?.job?.title);

// null合体演算子
const userInput = undefined;

const storedData = userInput ?? 'Default';

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    if('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if('startDate' in emp) {
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

    loadCargo(amount: number) {
        console.log('荷物を載せています...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// 判別可能なユニオン型
interface Bird {
    type: 'bird',// リテラル型
    flyingSpeed: number,
}

interface Horse {
    type: 'horse',
    runningSpeed: number,
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// 型キャスト
/* const userInputElement = <HTMLInputElement>document.getElementById('user-input'); */
/* const userInputElement = document.getElementById('user-input') as HTMLInputElement; */
const userInputElement = document.getElementById('user-input');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'こんにちは';
}

// インデックス型
interface ErrorContainer { //{ email: '正しいメールアドレスではありません', userName: '正しいユーザーネームではありません'}
    // [プロパティ名：プロパティの型]: 値の型;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザー名に記号を含めることはできません'
};

