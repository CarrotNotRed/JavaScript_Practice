export default abstract class BankingAccount {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
  abstract getBalance(): number;
}
