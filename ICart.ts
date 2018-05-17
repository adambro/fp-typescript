import { Product } from "./Product";

export interface ICart<T extends Product> {
    products: T[];
    total: number;
    addProduct(product: T): void;
    showProducts(): string;
}