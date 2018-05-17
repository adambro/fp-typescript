interface ApiConfig {
    [key: string]: string
}

let config: ApiConfig = {
    apiUrl: ''
}
// ====

interface User {
    name: string;
    age: string;
}

class UserClass {
    constructor(private firstname: string, private lastName:string, age: number) {
    }

    get fullName(): string {
        return `${this.firstname} ${this.lastName}`;
    }

    showUser(): void {
        console.log(this.firstname);
    }
}

let myUser = new UserClass('Alojzy', 'Bombel', 55);
console.log(myUser.fullName);

// ====
import { Cart } from './Cart'
import { Product } from './Product'

const cart = new Cart();
const p1: Product = {
    title: 'Kubek',
    price: 10,
    description: 'Z kotami'
}
const p2: Product = {
    title: 'Szolka',
    price: 40,
    description: 'Bez kotow'
}

cart.addProduct(p1)
cart.addProduct(p2)

cart.showProducts();
