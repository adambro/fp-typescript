import { Product } from "../models";

export interface ICart<T extends Product> {
    products: T[];
    total: number;
    addProduct(product: T);
    showProducts(): string;
}