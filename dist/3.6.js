"use strict";
{
    // getter and setter
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        //getter
        get Balance() {
            return this._balance;
        }
        //setter
        set Deposit(amount) {
            this._balance = this.Balance + amount;
        }
    }
    const goribAccount = new BankAccount(1001, "Gorib", 50);
    goribAccount.Deposit = 5;
    const myBalance = goribAccount.Balance;
    console.log(myBalance);
}
