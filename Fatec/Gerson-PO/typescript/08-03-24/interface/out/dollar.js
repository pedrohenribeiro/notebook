"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dollar = /** @class */ (function () {
    function Dollar(moeda) {
        this.moeda = moeda;
    }
    Dollar.prototype.formatar = function () {
        return "US$ ".concat(this.moeda.pegarValor);
    };
    return Dollar;
}());
exports.default = Dollar;
