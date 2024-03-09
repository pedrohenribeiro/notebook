import Pessoa from "./pessoa";

export default class Aluno extends Pessoa{
    public ra!: string
    constructor(nome: string, ra: string){
        super(nome)//para usar um construtor da classe superior na classe filho
        this.ra = ra
    }
    public mostrarInformacoes(): string {
        return `Nome: ${this.nome} ra: ${this.ra}`
    }
}