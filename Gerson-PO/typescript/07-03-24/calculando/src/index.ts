import multiplicacao from "./multiplicacao"
import Soma from "./soma"
import Subtracao from "./subtracao"

let calculo = new Soma()
console.log(calculo.calcular(10,5))

calculo = new multiplicacao()
console.log(calculo.calcular(2,4))

calculo = new Subtracao()
console.log(calculo.calcular(21,4))