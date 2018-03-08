"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
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
