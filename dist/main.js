"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var utils_1 = require("./utils");
var electronicsCart = new Cart_1.Cart();
var foodsCart = new Cart_1.Cart();
electronicsCart.addProduct({
    price: 10,
    description: 'product descr 1',
    title: 'TV',
    id: 1,
    quantity: 10,
    voltage: 230
});
foodsCart.addProduct({
    price: 10,
    description: 'product descr 1',
    title: 'Tomato',
    id: 1,
    quantity: 5,
    weight: 3
});
console.log(foodsCart.showProducts());
console.log(utils_1.showProductDetails(foodsCart.products[0]));
console.log(utils_1.showProductDetails(electronicsCart.products[0]));
