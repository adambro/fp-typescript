"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
        this.total = 0;
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
        this.total += product.price;
    };
    Cart.prototype.showProducts = function () {
        return "Products: \n        " + this.products.map(function (x) { return x.title; }).join() + "\n        Total: " + this.total;
    };
    return Cart;
}());
exports.Cart = Cart;
