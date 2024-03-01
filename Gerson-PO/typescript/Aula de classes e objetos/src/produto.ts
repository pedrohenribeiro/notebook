export default class produto{
    // o nome! é para dizer que nao vamos colocar um valor no momento, para parar de reclamar
    public nome!: string
    public mostrarDetalhes(){
        console.log(`detalhes: nome ${this.nome}`)
    }
    
}
