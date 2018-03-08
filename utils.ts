import { FoodProduct, ElectronicProduct } from "./models";

export function showProductDetails(prod: FoodProduct | ElectronicProduct): string {
    if(isElectronicProduct(prod)) {
        return `Supply voltage: ${prod.voltage}V`;
    } else {
        return `Food weight: ${prod.weight}V`;
    }
}

function isElectronicProduct(val: ElectronicProduct | FoodProduct): val is ElectronicProduct {
    return (<ElectronicProduct>val).voltage !== undefined;
}