"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data = /** @class */ (function () {
    function Data(data) {
        this.data = data;
    }
    Object.defineProperty(Data.prototype, "pegarData", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
exports.default = Data;
