class Somadora{
    //number depois da função é o tipo de retorno, nesse caso sendo number
    //number = int e double do java
    // usar:  npx tsc .\somadora.ts

    //mudar do power shell para o cmd(prompt de comando)
    public somar(numero1: number,numero2: number): number{
        return numero1 + numero2
    }
}
let soma1 = new Somadora()
console.log(soma1.somar(10,20))