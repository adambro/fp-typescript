export interface BankAccount {
    money: number;
    deposit(value: number): void;
}

interface Person {
    name: string;
    bankAccount: BankAccount,
    hobbies?: string[]
}

let bankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
 };
  
 let myself = {
    name: "Rafal",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
 };
  
 myself.bankAccount.deposit(3000);
  
 console.log(myself);