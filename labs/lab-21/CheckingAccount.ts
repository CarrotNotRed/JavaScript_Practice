import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
  private minimumBalance: number;
  private balance: number;
  constructor(initialBalance: number, minimumBalance: number) {
    super();
    this.minimumBalance = minimumBalance;
    this.balance = initialBalance;
  }
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit for checking account: ${this.balance}`);
  }
  withdraw(amount: number): void {
    console.log(`The amount you want to withdraw: ${amount}`);
    if (amount > this.balance) {
      console.log(
        `Money is not enough to withdraw. The checking account balance: ${this.balance} and the amount that you want to withdraw: ${amount}`
      );
    } else if (this.balance - amount < this.minimumBalance) {
      console.log(`Minimum balance is not lower than ${this.minimumBalance}`);
    } else {
      this.balance -= amount;
      console.log(
        `Deposit of this account after withdrawing is ${this.balance}`
      );
    }
  }
  getBalance(): number {
    console.log(`The balance in your checking account is ${this.balance}`);
    return this.balance;
  }
}
