"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(endereco, razaoSocial, nomeFantasia, cnpj) {
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.endereco = endereco;
    }
    Empresa.prototype.mostrarEmpresa = function () {
        return "razaoSocial: ".concat(this.razaoSocial, ", nomeFantasia: ").concat(this.nomeFantasia, ", cnpj: ").concat(this.cnpj, ", endereco: ").concat(this.endereco.mostrarEndereco);
    };
    return Empresa;
}());
exports.default = Empresa;
