class BankAccount {
  constructor(balance, transactions){
    this.balance = 0; 
    this.transactions = [];
  }

  deposit(amount){
    if(amount > 0){
      this.transactions.push({type: "deposit", amount: amount}); 
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    } else if (amount <= 0){
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount){
    if(amount > 0 && amount <= this.balance){
      this.transactions.push({type: "withdraw", amount: amount}); 
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    } else if(amount <= 0 || amount > this.balance){
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance(){
    return `Current balance: $${this.balance}`
  }

  listAllDeposits(){
    const depositsArray = this.transactions.filter((item) => item.type === "deposit"); 
    return `Deposits: ` + depositsArray.map(({type, amount}) => `${amount}`).join(",");
  }

  listAllWithdrawals(){
  const withdrawalsArray = this.transactions.filter((item) => item.type === "withdraw"); 
    return `Withdrawals: ` + withdrawalsArray.map(({type, amount}) => `${amount}`).join(",");
  

}
}

const myAccount = new BankAccount();
myAccount.deposit(100); 
myAccount.deposit(1000);
myAccount.deposit(200);
myAccount.withdraw(100);
myAccount.withdraw(300);

console.log(myAccount.withdraw(150));
console.log(myAccount.withdraw(100));
console.log(myAccount.checkBalance())
