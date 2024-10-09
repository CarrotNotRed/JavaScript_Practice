import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {
  private balance: number = 0;

  constructor(initialBalance: number) {
    super();
    this.balance += initialBalance;
  }

  deposit(amountDeposit: number): void {
    this.balance += amountDeposit;
    console.log(`Deposit for saving account: ${this.balance}`);
  }
  withdraw(amount: number): void {
    console.log(`The amount you want to withdraw: ${amount}`);
    if (amount > this.balance) {
      console.log(
        `Money is not enough to withdraw. The checking account balance: ${this.balance} and the amount that you want to withdraw: ${amount}`
      );
    } else {
      this.balance -= amount;
      console.log(
        `Balance of this account after withdrawing is ${this.balance}`
      );
    }
  }
  getBalance(): number {
    console.log(`The balance in your saving account is ${this.balance}`);
    return this.balance;
  }
}
