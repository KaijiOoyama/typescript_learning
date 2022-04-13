"use strict";
// ジェネリック型
// 他の特定の型と結合された型
// TypeScriptにおける型安全性を高めることができる
// 自動保管等の開発サポートを向上することができる
// 配列の場合、どんなデータが格納されるのか
/* const names: Array<string>  = []; // string[]
// names[0].split('');

// promiseの場合どんなデータが返されるのか
const promise = new Promise<number>((resolve,reject) => {
    setTimeout(() => {
        resolve(2);
    },2000);
})

promise.then(data => {
    //data.split(''); エラー
}); */
// Generic関数の作成
// 引数の型はなんでもいい、交差型を返す
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Max' }, { age: 2 }));
const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj);
// lengthプロパティを持っていればなんでも良い
function countAndDescribe(element) {
    let descriptionText = '値がありません。';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です。';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([]));
// keyof制約
// TオブジェクトにUプロパティ(key)が存在していることを確認
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
// ジェネリッククラス
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("data1");
textStorage.addItem("data2");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// 読み取り専用にできる
const names = ['Max', 'Anna'];
/* names.push('Manu'); // エラー */ 
