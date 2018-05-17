interface BankAccount {
    money: number;
    deposit: (value: number) => void;
}

interface Person {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
 
let myself: Person = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000); 
console.log(myself);
