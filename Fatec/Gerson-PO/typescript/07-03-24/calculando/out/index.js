"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var calculo = new soma_1.default();
console.log(calculo.calcular(10, 5));
calculo = new multiplicacao_1.default();
console.log(calculo.calcular(2, 4));
calculo = new subtracao_1.default();
console.log(calculo.calcular(21, 4));
