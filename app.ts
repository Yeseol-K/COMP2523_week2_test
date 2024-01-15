class SavingsAccount {
  //Data
  private _memberId: number; //can't be repeated
  private _balance: number = 0; //default value is 0;
  
  constructor(memberId: number, startingBalance: number) {
    this._memberId = memberId;
    this._balance = startingBalance;
  }

  getBalance() {
    return "Your balance:" + this._balance;
  }

  //Methods
  withdraw(amount: number) {
    if(amount > this._balance) {
      throw new Error ("not enough money");
    }
    this._balance -= amount;
  }
  deposit(amount: number) {
   this._balance += amount;
  }

}

class BankMember {
  private _name: string;
  private _memberId: number;
  private _savingsAccount!: SavingsAccount;

  constructor(name: string) {
    this._name = name;
    this._memberId = this.generateId();
  }

  depositToSavings(amount: number){
    this._savingsAccount.deposit(amount);
  }

  withdrawFromSavings(amount: number){
    this._savingsAccount.withdraw(amount);
  }

  viewSavingBalance() {
    `Your balance is:
    ${this._savingsAccount.getBalance()}`;
  }

  createSavingsAccount(startingBalance: number){
    this._savingsAccount = new SavingsAccount(this._memberId, startingBalance)
  }

  private generateId(): number {
    return Math.floor(Math.random() * 5000)
  }

}

const james = new BankMember("james");
james.createSavingsAccount(40);
james.depositToSavings(10);
james.viewSavingBalance();
