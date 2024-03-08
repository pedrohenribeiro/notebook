"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moeda = /** @class */ (function () {
    function Moeda(valor) {
        this.valor = valor;
    }
    Object.defineProperty(Moeda.prototype, "pegarValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Moeda;
}());
exports.default = Moeda;
