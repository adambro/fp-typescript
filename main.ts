import { Cart } from "./Cart";
import { Product, FoodProduct, ElectronicProduct } from "./models";
import { showProductDetails } from "./utils";

let electronicsCart = new Cart<ElectronicProduct>();
let foodsCart = new Cart<FoodProduct>();
electronicsCart.addProduct({
    price: 10,
    description: 'product descr 1',
    title: 'TV',
    id: 1,
    quantity: 10,
    voltage: 230
})
foodsCart.addProduct({
    price: 10,
    description: 'product descr 1',
    title: 'Tomato',
    id: 1,
    quantity: 5,
    weight: 3
})
console.log(foodsCart.showProducts());
console.log(showProductDetails(foodsCart.products[0]));
console.log(showProductDetails(electronicsCart.products[0]))