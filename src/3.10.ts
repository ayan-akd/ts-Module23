{
  //Encapsulation

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    private getBalance() {
      return this._balance;
    }
    getHiddenMethod() {
      return this.getBalance();
    }
  }
  class StudentAccount extends BankAccount {
    test() {}
  }

  const goribAccount = new BankAccount(1001, "Gorib", 20);
  goribAccount.addDeposit(5);
  goribAccount.addDeposit(5);
  const getBalance = goribAccount.getHiddenMethod();
  console.log(getBalance);
}
