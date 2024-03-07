"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var soma_1 = __importDefault(require("./soma"));
var calculo = new soma_1.default();
console.log(calculo.calcular(10, 5));
