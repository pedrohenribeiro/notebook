"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormatoBrasil {
    constructor(data) {
        this.data = data;
    }
    formatar() {
        return `${this.data.pegarData.getDay()}/${this.data.pegarData.getMonth()}/${this.data.pegarData.getFullYear()}`;
    }
}
exports.default = FormatoBrasil;
