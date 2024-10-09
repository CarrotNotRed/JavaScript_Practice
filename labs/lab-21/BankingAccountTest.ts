import BankingAccount from "./BankingAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

const savingAccount: BankingAccount = new SavingAccount(100);//Init balance = 100
const checkingAccount: BankingAccount = new CheckingAccount(100,50);//Init balance = 100 and minimum balance = 50

/**
 * For Saving account, have 2 scenarios:
 * - Enough condition to withdraw: amount withdraw <= balance (1)
 * - Not enough condition to withdraw: amount withdraw > balance (2)
 */

//Saving Account
savingAccount.deposit(30);
savingAccount.withdraw(50);//enough condition to withdraw (1)
savingAccount.getBalance();
savingAccount.deposit(50);//The new balance should be added with previous balance
savingAccount.withdraw(200);//not enough condition to withdraw because amount to withdraw > deposit (2)
savingAccount.getBalance();//the balance won't minus by withdraw

console.log("---------------------------------------------");

/**
 * For Checking account, have 3 scenarios:
 * - Enough condition to withdraw: amount withdraw <= balance - minimum balance (1)
 * - Not enough condition to withdraw: amount withdraw > balance - minimum balance (2)
 * - Not enough condition to withdraw: amount withdraw > balance (3)
 */

//Checking Account
checkingAccount.deposit(150);
checkingAccount.withdraw(20);//enough condition to withdraw (1)
checkingAccount.getBalance();
checkingAccount.deposit(10);//should add new deposit amount
checkingAccount.withdraw(200);//not enough condition to with draw, the minium should > 50 (2)
checkingAccount.getBalance();// the balance won't minus by withdraw
checkingAccount.withdraw(300);//not enough condition to with draw because amount to withdraw > deposit (3)
checkingAccount.getBalance();// the balance won't minus by withdraw

