// abstract classはインスタンス化できない
// 継承することで使用できる
abstract class Department {
    //private readonly id: string;
    //name: string;
    //private employees: string[] = []; // クラスの内部からのみアクセスできる
    protected employees: string[] = []; // 子クラスからも参照できる
    //静的プロフパティ
    static fiscalYear = 20222;

    // 静的メソッド
    static createEmployee(name: string){
        return {name: name};
    }

    constructor(protected readonly id: string, public name: string) { // 定義を省略できる
        //this.name = n;
        // this.id = id;
    }

    // 抽象クラス 子クラスでオーバーライドして使う
    abstract describe(this: Department) : void;

    addEmployee(employee:string) {
        //this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//静的メソッドの呼び出し
const employee = Department.createEmployee('Kaiji');
console.log(employee);

// 継承
// 継承元=ベースクラス=Departmentクラス
class ITDepartment extends Department {
    constructor(id: string, private admins: string[]){
        super(id, 'IT');
    }

    describe() {
        console.log('IT部門');
    }
}

// 動作する
const it = new ITDepartment('d1',['Max']);
console.log(it);
it.addEmployee('Max');
it.addEmployee('Manu');
it.printEmployeeInformation();
it.describe();

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // ゲッター
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }

    // セッター値を設定する処理
    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('正しい値を入力してください。');
        }
        this.addReport(value);
    }

    // シングルトンパターン
    //コンストラクタをprivateにすることでこのクラスは一つしか存在できなくなる
    private constructor(id:string, private reports: string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    // インスタンスを返す
    static getInstance() {
        // インスタンスがあればインスタンを返す
        if(AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        AccountingDepartment.instance = new AccountingDepartment('d2',[]);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    describe() {
        console.log('会計部門・ID' + this.id);
    }

    printReports() {
        console.log(this.reports);
    }

    // 親クラスのメソッドをオーバーライドできる
    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }
}

//const accounting = new AccountingDepartment('d2',[]);
/* const accounting = AccountingDepartment.getInstance();
console.log(accounting);

// ゲッターの呼び出しは()がいらない
// console.log(accounting.mostRecentReport);
accounting.addReport('Something');
console.log(accounting.mostRecentReport);

// セッターの呼びたし
accounting.mostRecentReport = 'カイジ';

console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('kaiji');
accounting.printEmployeeInformation();

accounting.describe(); */
