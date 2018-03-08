import { Product } from './models/Product';

export class Cart {
    private _products: Product[] = [];
    private _total: number = 0;

    addProduct(product: Product) {
        this._products.push(product);
        this._total += product.price;
    }

    showProducts(): string {
        let productsSummary = 
        this._products.map(p=> p.title).join(', ')
        return `Products: ${productsSummary}
        Total price: ${this._total}`
    }
}