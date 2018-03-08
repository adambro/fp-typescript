import { Product } from "./Product";

export interface ElectronicProduct extends Product {
    voltage: number;
}