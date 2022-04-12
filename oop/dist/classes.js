"use strict";
// abstract classはインスタンス化できない
// 継承することで使用できる
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private readonly id: string;
        //name: string;
        //private employees: string[] = []; // クラスの内部からのみアクセスできる
        this.employees = []; // 子クラスからも参照できる
        //this.name = n;
        // this.id = id;
    }
    // 静的メソッド
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        //this.id = 'd2';
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//静的プロフパティ
Department.fiscalYear = 20222;
//静的メソッドの呼び出し
const employee = Department.createEmployee('Kaiji');
console.log(employee);
// 継承
// 継承元=ベースクラス=Departmentクラス
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT部門');
    }
}
// 動作する
const it = new ITDepartment('d1', ['Max']);
console.log(it);
it.addEmployee('Max');
it.addEmployee('Manu');
it.printEmployeeInformation();
it.describe();
class AccountingDepartment extends Department {
    // シングルトンパターン
    //コンストラクタをprivateにすることでこのクラスは一つしか存在できなくなる
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // ゲッター
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }
    // セッター値を設定する処理
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を入力してください。');
        }
        this.addReport(value);
    }
    // インスタンスを返す
    static getInstance() {
        // インスタンスがあればインスタンを返す
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        AccountingDepartment.instance = new AccountingDepartment('d2', []);
    }
    addReport(text) {
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
    addEmployee(name) {
        if (name === 'Max') {
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
