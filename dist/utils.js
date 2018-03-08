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
