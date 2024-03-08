"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo(nome, peso, fabricante) {
        this.nome = nome;
        this.peso = peso;
        this.fabricante = fabricante;
    }
    Veiculo.prototype.getDescricao = function () {
        return "Nome: ".concat(this.nome, ", peso: ").concat(this.peso, "kg, fabricante: ").concat(this.fabricante);
    };
    return Veiculo;
}());
exports.default = Veiculo;
