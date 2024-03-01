export default class Endereco{
    private numero: number
    private rua: string
    private bairro: string
    private cidade: string
    constructor(numero: number, rua: string, bairro: string, cidade: string){
        this.numero = numero
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
    }
    public mostrarEndereco(){
        return`Cidade: ${this.cidade}, bairro: ${this.bairro}, rua: ${this.rua}, número: ${this.numero}`
    }
}
