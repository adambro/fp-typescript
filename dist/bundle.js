/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(2);
var elem = document.querySelector('#container');
if (elem) {
    elem.innerHTML = "<span>asadsadsad<span>";
}
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function showProductDetails(prod) {
    if (isElectronicProduct(prod)) {
        return "Supply voltage: " + prod.voltage + "V";
    }
    else {
        return "Food weight: " + prod.weight + "V";
    }
}
exports.showProductDetails = showProductDetails;
function isElectronicProduct(val) {
    return val.voltage !== undefined;
}


/***/ })
/******/ ]);