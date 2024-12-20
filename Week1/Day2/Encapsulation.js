class BankAccount{
    #balance; //private property

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if(amount <= this.#balance){
            this.balance -+ amount;
        }else{
            console.log('Insufficient Balance!')
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const account  = new BankAccount(1000);
account.deposit(2000);
account.withdraw(700);
console.log(account.getBalance()); //Output = 3000


// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class