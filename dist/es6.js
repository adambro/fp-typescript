"use strict";
//console.log(a);
//console.log(b);
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
console.log.apply(console, arr);
