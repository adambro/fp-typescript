import { Product } from "./Product";
import { ICart } from "./ICart";

export class Cart<T extends Product> implements ICart<T> {
    products: T[] = [];
    total = 0;

    addProduct(product: T) {
        this.products.push(product);
        this.total += product.price * product.quantity;
    }

    showProducts(): string {
        return `Products: 
        ${this.products.map(x => x.title).join()}
        Total: ${this.total}`;
    }
}