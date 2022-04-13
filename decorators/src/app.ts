// デコレータ
function Logger(logString: string) {
    console.log('logger');
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('temp');
    return function(constructor: any) {
        console.log('テンプレートを表示');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

/* @Logger('ログ出力中 - Person'); */
@Logger('ログ出力中')
@WithTemplate('<h1>Personオブジェクト</h1>','app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Personオブジェクトを作成中...');
    }

}

const pers = new Person();
console.log(pers);

//プロパティデコレータ

function Log(target: any, propertyName: string | Symbol) {
    console.log('プロパティデコレータ');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDecorator){
    console.log('Accessorデコレータ');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDecorator){
    console.log('Methodデコレータ');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product{
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('不正な価格です０以下は設定できません。');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}