{
    // 
    
    class BankAccount {
        public readonly id: number;
        public name: string;
        private balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        addDeposite(amount: number): void {
            this.balance += amount;
        }

        getBalance (): number {
            return this.balance;
        }
    }

    const customer = new BankAccount(222, "rehan", 10);
     
    // customer.balance = 0;
    customer.addDeposite(100);

    console.log(customer.getBalance());


    class BankAccount2 {
        public readonly id: number;
        public name: string;
        private _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposite(amount: number) {
            this._balance += amount;
        }

        get balance(): number {
            return this._balance;
        }
    }

    const customer2 = new BankAccount2(333, "ali", 0);
    customer2.deposite = 100;
    const bal = customer2.balance;
    console.log(bal);
    //
}