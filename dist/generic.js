"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElementList = /** @class */ (function () {
    function ElementList(_elements) {
        this._elements = _elements;
    }
    ElementList.prototype.put = function (el) {
        this._elements.push(el);
    };
    Object.defineProperty(ElementList.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: true,
        configurable: true
    });
    return ElementList;
}());
exports.ElementList = ElementList;
var numberList = new ElementList([]);
var numberArr = numberList.elements;
function get() {
    return [];
}
function overloadedFunction(num, str) {
}
