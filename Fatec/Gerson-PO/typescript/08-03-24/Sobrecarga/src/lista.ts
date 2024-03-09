export default class Lista<T>{
    private dados: T[]
    constructor(dados: T[]){
        this.dados = dados
    }
    public quantidade(): number{
        return this.dados.length
    }
    public pegarDado(posicao:number):T{
        return this.dados[posicao]
    }
}