import Endereco from "./endereco"
export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco

    constructor(endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string){
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
        this.endereco = endereco
    }
    public mostrarEmpresa(){
        return`razaoSocial: ${this.razaoSocial}, nomeFantasia: ${this.nomeFantasia}, cnpj: ${this.cnpj}, endereco: ${this.endereco.mostrarEndereco}`
    }
}