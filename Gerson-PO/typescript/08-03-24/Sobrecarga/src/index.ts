//import Dado from "./dado";
//import Empresa from "./empresa";
//import Lista from "./lista";

import Animal from "./animal"
import Gata from "./cachorro"
import Cachorro from "./cachorro"

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
const fazerBarulho = (animal: Animal) =>{
    console.log(animal.fazerBarulho())
}

let dog = new Cachorro()
fazerBarulho(dog)

let cat = new Gata()
fazerBarulho(cat)
//usa a interface para limitar acesso, para dar diferentes 
//"atributos/metodos" para classes que herdam de uma mesma 
//classe superior