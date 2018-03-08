"use strict";
//console.log(a);
//console.log(b);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var a = 5;
var b = 6;
var c = {
    p1: 1
};
c.p1 = 6;
var test = function (arg) {
    return arg * 5;
};
var test2 = function (arg) { return arg * 5; };
var obj = {
    a: "test",
    fn1: function () {
        console.log("from fn1: ", this);
        setTimeout(function () {
            console.log("from timeout1", this);
        });
    },
    fn2: function () {
        var _this = this;
        console.log("from fn2: ", this);
        setTimeout(function () {
            console.log("from timeout2", _this);
        });
    }
};
obj.fn1();
obj.fn2();
function myFn(p1) {
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParams[_i - 1] = arguments[_i];
    }
    console.log(restParams);
}
myFn(1, 2, 3, 4, 5, 6, "test");
var arr = [1, 2, 3];
var newArray = arr.concat(arr);
console.log.apply(console, arr);
var testobj = {
    a: 1,
    b: 2
};
var testobj2 = __assign({}, testobj);
var str1 = "Hello";
var str2 = "World";
console.log(str1 + " "
    + str2);
console.log(str1 + " \n\n" + str2);
