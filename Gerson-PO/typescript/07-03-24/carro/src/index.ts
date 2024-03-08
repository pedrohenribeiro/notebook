import Automovel from "./automovel";
import Veiculo from "./veiculo";

let automovel = new Automovel(`Camaro`, 850,`Uma marca`,2)


const mostrar = (veiculo: Veiculo) => {
    console.log(veiculo.getDescricao())
}
mostrar(automovel)