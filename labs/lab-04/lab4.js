const readline = require(`readline-sync`);
/**
 * Creating 1 object representing Bank Account with below structure:
 * {
    accountNumber: String,
    routingNumber: String,
    balance: Number
    }
 */

const account1 = {
  accountNumber: "DN123456789",
  routingNumber: "TCB001212121212",
  balance: 8,
};

/**
 * Creating another Bank Account Object which clone from the previous one
 * and update the accountNumber only.
 * Put them into ann array call: bankAccounts
 */

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = "HCM787878787";

let bankAccounts = [account1, account2];
console.log(bankAccounts);

/**
 * Write a consolse interface app to:
 * allow user to find account by using accountNumber, if the account is existing, print the name and balance info out 
 * (NOT all the object)
 * allow user to withdraw the money and avoid user to take more than current balance
 * Note: Strongly recommend to create functions to process each tasks
 * === Banking application===
1. Find an account
2. Update balance
0. Exit the program
 */

function findAccountByAccountNumber(accountNumber) {
  for (let i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].accountNumber === accountNumber) {
      return bankAccounts[i];
    }
  }
  return null;
}

function updateBalance(accountNumber, amount) {
  let account = findAccountByAccountNumber(accountNumber);
  if (account !== null) {
    if (account.balance >= amount) {
      account.balance = account.balance - amount;
      console.log(`Withdraw successfully. New balance is ${account.balance}`);
    } else {
      console.log("Not enough balance");
    }
  } else {
    console.log(`Account not found`);
  }
}

while (true) {
  console.log("---Banking application---");
  console.log("1. Find an account");
  console.log("2. Update balance");
  console.log("0. Exit the program");
  let choice = readline.questionInt("Enter your choice: ");
  switch (choice) {
    case 1:
      let accountNumber = readline.question("Enter account number: ");
      let account = findAccountByAccountNumber(accountNumber);
      if (account !== null) {
        console.log(
          `Account found: ${account.accountNumber} and Balance: ${account.balance}`
        );
      } else {
        console.log("Account not found");
      }
      break;
    case 2:
      let accountNumberupdate = readline.question("Enter account number: ");
      let amount = readline.questionInt("Enter amount to withdraw: ");
      while (amount < 0) {
        console.log("Please enter positive amount!");
        amount = readline.questionInt("Enter amount to withdraw: ");
      }
      updateBalance(accountNumberupdate, amount);
      break;
    case 0:
      console.log("Exiting program");
      return;
    default:
      console.log("Invalid choice");
  }
}
