export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
}

export interface FoodProduct extends Product {
    weight: number;
}
export interface ElectronicProduct extends Product {
    voltage: number;
}