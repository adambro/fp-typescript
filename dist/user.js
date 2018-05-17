"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SuperUser = /** @class */ (function () {
    function SuperUser() {
    }
    SuperUser.prototype.setAdminRights = function (isAdmin) {
        console.log('test');
    };
    ;
    return SuperUser;
}());
var SuperUser2 = /** @class */ (function () {
    function SuperUser2() {
    }
    SuperUser2.prototype.setAdminRights2 = function (isAdmin) {
        console.log('test');
    };
    ;
    return SuperUser2;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, secondName) {
        if (firstName === void 0) { firstName = 'Adam'; }
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.secondName = secondName;
        _this.names = [];
        return _this;
    }
    User.prototype.getName = function () {
        return this.firstName;
    };
    User.prototype.logFullName = function () {
        this.names.push('');
        console.log(this.firstName + " " + this.secondName);
    };
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.secondName;
        },
        set: function (fullName) {
            var names = fullName.split(' ');
            this.firstName = names[0];
            this.secondName = names[1];
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(SuperUser));
exports.User = User;
var myUser = new User('Alojzy', 'Jeż');
myUser.logFullName();
myUser.fullName = 'Adam Miauczyński';
myUser.logFullName();
