"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Real = /** @class */ (function () {
    function Real(moeda) {
        this.moeda = moeda;
    }
    Real.prototype.formatar = function () {
        var literal = new String(this.moeda.pegarValor);
        var comVirgula = literal.replace('.', ',');
        return "R$ ".concat(comVirgula);
    };
    return Real;
}());
exports.default = Real;
