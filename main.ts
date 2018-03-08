import { Cart } from "./Cart";

let cart = new Cart();
cart.addProduct({
    price: 10,
    description: 'product descr 1',
    title: 'Product 1',
    id: 1
})

let prod2 = {
    price: 5,
    description: 'product descr 2',
    title: 'Product 2',
    id: 2
};
cart.addProduct(prod2);

console.log(cart.showProducts());