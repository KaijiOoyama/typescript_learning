"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
// インターフェースをimplements 実装する
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
// インターフェースを型として使用できる
let user1;
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
