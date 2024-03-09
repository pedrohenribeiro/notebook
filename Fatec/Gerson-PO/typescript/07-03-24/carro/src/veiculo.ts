export default abstract class Veiculo{
    readonly nome!:string
    public peso!:number
    readonly fabricante!:string

    constructor(nome: string, peso:number, fabricante:string){
        this.nome = nome
        this.peso = peso
        this.fabricante = fabricante
    }
    getDescricao():string{
        return `Nome: ${this.nome}, peso: ${this.peso}kg, fabricante: ${this.fabricante}`
    }
}