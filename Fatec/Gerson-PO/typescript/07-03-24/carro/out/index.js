"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var automovel_1 = __importDefault(require("./automovel"));
var automovel = new automovel_1.default("Camaro", 850, "Uma marca", 2);
console.log(automovel.getDescricao);
var mostrar = function (veiculo) {
    console.log(veiculo.getDescricao());
};
mostrar(automovel);
