"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var cart = new Cart_1.Cart();
cart.addProduct({
    description: 'prod1 descr',
    title: 'prod`1',
    price: 1.99,
    id: 1
});
cart.addProduct({
    description: 'prod2 descr',
    title: 'prod`2',
    price: 2.99,
    id: 2
});
console.log(cart.showProducts());
