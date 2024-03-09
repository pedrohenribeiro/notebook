export default abstract class Pessoa{
    public nome!: string
    constructor(nome: string){
        this.nome = nome
    }

    public abstract mostrarInformacoes(): string
}
