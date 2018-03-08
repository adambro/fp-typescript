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
