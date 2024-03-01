"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto = /** @class */ (function () {
    function produto() {
    }
    produto.prototype.mostrarDetalhes = function () {
        console.log("detalhes: nome ".concat(this.nome));
    };
    return produto;
}());
exports.default = produto;
