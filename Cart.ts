import { Product } from './Product';

export class Cart<T extends Product> {
    private products: T[] = [];
    private sum: number = 0;

    addProduct(product: T) {
        this.products.push(product);
        this.sum += (product.price * product.quantity);
    }

    showProducts() {
        this.products.forEach((item) => {
            console.log(`| ${item.title} | ${item.price} |`)
        })
        console.log(`Products total: ${this.sum}`)
    }
}