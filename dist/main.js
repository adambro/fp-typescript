"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var cart = new Cart_1.Cart();
cart.addProduct({
    price: 10,
    description: 'product descr 1',
    title: 'Product 1',
    id: 1
});
var prod2 = {
    price: 5,
    description: 'product descr 2',
    title: 'Product 2',
    id: 2
};
cart.addProduct(prod2);
console.log(cart.showProducts());
