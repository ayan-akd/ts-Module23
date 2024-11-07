{
  // getter and setter

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

    //getter
    get Balance() {
      return this._balance;
    }

    //setter
    set Deposit(amount: number) {
      this._balance = this.Balance + amount;
    }
  }

  const goribAccount = new BankAccount(1001, "Gorib", 50);
  goribAccount.Deposit = 5;
  const myBalance = goribAccount.Balance;
  console.log(myBalance);
}
