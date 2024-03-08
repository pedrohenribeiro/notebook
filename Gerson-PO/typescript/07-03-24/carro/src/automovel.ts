import Veiculo from "./veiculo";

export default class Automovel extends Veiculo{
    readonly quantidadeMaximaPassageiros!:number
    constructor(nome:string, peso:number, fabricante:string, quantidadeMaximaPassageiros:number){
        super(nome,peso,fabricante)
        this.quantidadeMaximaPassageiros = quantidadeMaximaPassageiros
    }

}