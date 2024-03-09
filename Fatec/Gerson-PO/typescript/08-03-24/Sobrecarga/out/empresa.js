"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(razaoSocial, cnpj, nomeFantasia) {
        if (razaoSocial !== undefined && cnpj !== undefined && nomeFantasia !== undefined) {
            this.razaoSocial = razaoSocial;
            this.cnpj = cnpj;
            this.nomeFantasia = nomeFantasia;
        }
        if (razaoSocial !== undefined && cnpj !== undefined && nomeFantasia == undefined) {
            this.razaoSocial = razaoSocial;
            this.cnpj = cnpj;
        }
    }
    return Empresa;
}());
exports.default = Empresa;
