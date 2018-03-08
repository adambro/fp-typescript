import { Product } from './models/Product';
import { ICart } from './interfaces/ICart';

export class Cart<T extends Product> implements ICart<T> {
    products: T[] = [];
    total: number = 0;

    addProduct(product: T) {
        this.products.push(product);
        this.total += product.price * product.quantity;
    }

    showProducts(): string {
        let productsSummary = 
        this.products.map(p=> p.title + `(${p.quantity})`).join(', ')
        return `Products: ${productsSummary}
        Total price: ${this.total}`
    }
}