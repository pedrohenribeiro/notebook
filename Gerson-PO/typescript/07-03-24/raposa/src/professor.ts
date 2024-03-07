import Pessoa from "./pessoa";

export default class Professor extends Pessoa{
    public codigo!:string
    constructor(nome: string, codigo:string){
        super(nome)//para usar um construtor da classe superior na classe filho
        this.codigo = codigo
    }
    public mostrarInformacoes(): string {
        return `Nome: ${this.nome} código: ${this.codigo}`
    }
}