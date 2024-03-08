//lista pode colocar qualquer coisa, é um "any" 
//para tipar a lista coloca o tipo antes do [] exemplo: public informacoes!: Number[]
export default class Dado<T>{
    public informacoes!: T[]
}