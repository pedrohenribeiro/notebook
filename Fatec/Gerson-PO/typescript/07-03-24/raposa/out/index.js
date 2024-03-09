"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = __importDefault(require("./aluno"));
var professor_1 = __importDefault(require("./professor"));
var prf = new professor_1.default("Masanori", "aaaa");
var al = new aluno_1.default("Pedro", "09222");
console.log('Código do professor: ' + prf.codigo + ' Nome do Professor: ' + prf.nome);
console.log(al);
var mostrar = function (pessoa) {
    console.log(pessoa.mostrarInformacoes());
};
mostrar(prf);
mostrar(al);
