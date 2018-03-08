"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._products = [];
        this._total = 0;
    }
    Cart.prototype.addProduct = function (product) {
        this._products.push(product);
        this._total += product.price;
    };
    Cart.prototype.showProducts = function () {
        var productsSummary = this._products.map(function (p) { return p.title; }).join(', ');
        return "Products: " + productsSummary + "\n        Total price: " + this._total;
    };
    return Cart;
}());
exports.Cart = Cart;
