import { Product } from './Product';

export class Cart {
    private products: Product[] = [];
    private sum: number = 0;

    addProduct(product: Product) {
        this.products.push(product);
        this.sum += product.price;
    }

    showProducts() {
        this.products.forEach((item) => {
            console.log(`| ${item.title} | ${item.price} |`)
        })
        console.log(`Products total: ${this.sum}`)
    }
}