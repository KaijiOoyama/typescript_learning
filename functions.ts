// 戻り値の型宣言
function add(n1: number, n2: number): number{
    return n1 + n2;
}

// 戻り値void = 何も返さない = rerunを返さない = undefined
function printResult(num: number): void {
    console.log('Result' + num);
}

function addAndHandle(n1: number, n2:number, cb: (num:number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20, (result) => {
    console.log(result);
})

/* // 関数であることの宣言
let combineValues: Function; */

// 二つの引数を持ちnumberを返す関数のみ代入できるようにする
let combineValues: (a: number, b:number) => number;

combineValues = add;

/* combineValues = printResult; この代入はエラーになる*/

console.log(combineValues(8,8));

printResult(add(5,12));