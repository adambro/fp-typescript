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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __webpack_require__(7);
var num = 1;
var str = 'test';
var bool = false;
var numArr = [1, 2, 3, 4];
num = 1;
numArr.push(num);
function testfn(num) {
    throw new Error();
}
var user = new User_1.User('Alojzy');
console.log(user.getHelloName());
var userAddress = {
    city: 'Radzionków',
    street: 'Hasiok 10'
};
var numOrString;
numOrString = 'asdsa';
function test2(value) {
    if (typeof value === 'string') {
    }
    else {
    }
}
function test3(val) {
    if (val instanceof User_1.User) {
    }
    else {
    }
}
function test4(val) {
    if ('city' in val) {
    }
    else {
    }
}
function isPerson(val) {
    return val.name !== undefined;
}


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(newName) {
        this._name = newName;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.getHelloName = function () {
        return 'hello ' + this.name;
    };
    return User;
}());
exports.User = User;


/***/ })

/******/ });