"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = __importDefault(require("./produto"));
var endereco_1 = __importDefault(require("./endereco"));
var empresa_1 = __importDefault(require("./empresa"));
var produtinho = new produto_1.default();

produtinho.nome = "Rimel";
produtinho.mostrarDetalhes();

var endereco = new endereco_1.default(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
var endereco2 = new endereco_1.default(123, 'Av. 9 de Julho', 'Jardim Apolo', 'São José dos Campos');
var empresa = new empresa_1.default(endereco.mostrarEndereco, 'razao algo', 'MetaCode', 'cnpj');

console.log(endereco.mostrarEndereco());
console.log(endereco2.mostrarEndereco());
console.log(empresa.mostrarEmpresa());
