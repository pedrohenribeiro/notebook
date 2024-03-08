"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dollar {
    constructor(moeda) {
        this.moeda = moeda;
    }
    formatar() {
        return `US$ ${this.moeda.pegarValor}`;
    }
}
exports.default = Dollar;
