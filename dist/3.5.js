"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() { }
    }
    const goribAccount = new BankAccount(1001, "Gorib", 20);
    goribAccount.addDeposit(5);
    goribAccount.addDeposit(5);
    const getBalance = goribAccount.getBalance();
    console.log(getBalance);
}
