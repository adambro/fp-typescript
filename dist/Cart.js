"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
        this.total = 0;
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
        this.total += product.price * product.quantity;
    };
    Cart.prototype.showProducts = function () {
        var productsSummary = this.products.map(function (p) { return p.title + ("(" + p.quantity + ")"); }).join(', ');
        return "Products: " + productsSummary + "\n        Total price: " + this.total;
    };
    return Cart;
}());
exports.Cart = Cart;
