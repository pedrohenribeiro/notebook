"use strict";
//import Dado from "./dado";
//import Empresa from "./empresa";
//import Lista from "./lista";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = __importDefault(require("./cachorro"));
var gato_1 = __importDefault(require("./gato"));
/*
let fatec = new Empresa("Fatec", "2555")
console.log(fatec)
*/
/*
let obj = new Dado<number>()
obj.informacoes.push(144)
*/
/*
let textos: string[] = []

let lista = new Lista(textos)
console.log(`O tamanho da lista é: ${lista.quantidade}`)
console.log(`O dado 2 é: ${lista.quantidade}`)
*/
var fazerBarulho = function (animal) {
    console.log(animal.fazerBarulho());
};
var dog = new cachorro_1.default();
fazerBarulho(dog);
var cat = new gato_1.default();
fazerBarulho(cat);
//usa a interface para limitar acesso, para dar diferentes 
//"atributos/metodos" para classes que herdam de uma mesma 
//classe superior
