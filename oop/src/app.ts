// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

// インsターフェースとは
// オブジェクトがどんな形であるかを定義するもの
// コンパイル時に何も出力されない
interface Named {
    readonly name?: string;
    // プロパティ名の後に？をつけることでそのプロパティがあってもなくても良いことになる
    option?: string;
}

// 複数のインターフェースを継承できる
interface Greetable extends Named /* ,AnotherInterfase */{
    // readonlyを定義することで呼び出すときだけ定義できるようになる
    /* readonly name: string; */

    greet(phrase: string): void;
}

// インターフェースをimplements 実装する
class Person implements Greetable{
    name?: string;
    age = 30;

    constructor(n?: string) {
        if(n) { 
            this.name = n;
        }
    }

    greet(phrase:string){
        if(this.name) { 
            console.log(phrase + ' ' + this.name);
        }else {
            console.log('Hi');
        }
        
    }
}

// インターフェースを型として使用できる
let user1: Greetable;

user1 = new Person('Max');

// インターフェースで定義されたプロパティやメソッドを持っている必要がある
/* user1 = {
    name: 'Max',
    age: 30,
    greet(phrase:string) {
        console.log(phrase + '' + this.name);
    }
} */

// 通常通り使用できる
user1.greet('hello');

console.log(user1);

