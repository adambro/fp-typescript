import { Product } from './Product';

export interface ICart<T extends Product> {
    products: T[];
    sum: number;
    addProduct(product: T): void;
    showProducts(): void;
}