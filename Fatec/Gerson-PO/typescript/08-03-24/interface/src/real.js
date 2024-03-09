"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Real {
    constructor(moeda) {
        this.moeda = moeda;
    }
    formatar() {
        let literal = new String(this.moeda.pegarValor);
        let comVirgula = literal.replace('.', ',');
        return `R$ ${comVirgula}`;
    }
}
exports.default = Real;
