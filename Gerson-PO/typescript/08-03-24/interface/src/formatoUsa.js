"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormatoUSA {
    constructor(data) {
        this.data = data;
    }
    formatar() {
        return `${this.data.pegarData.getMonth()}/${this.data.pegarData.getDay()}/${this.data.pegarData.getFullYear()}`;
    }
}
exports.default = FormatoUSA;
