"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lista = /** @class */ (function () {
    function Lista(dados) {
        this.dados = dados;
    }
    Lista.prototype.quantidade = function () {
        return this.dados.length;
    };
    Lista.prototype.pegarDado = function (posicao) {
        return this.dados[posicao];
    };
    return Lista;
}());
exports.default = Lista;
