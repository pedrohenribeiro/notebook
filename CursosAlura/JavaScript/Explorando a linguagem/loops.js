const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false

const destino = 'Porto Seguro'
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste = false

while(contador<3){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true
        break
    }
    contador + 1
}
console.log('Destino existe: ', destinoExiste)

if(podeComprar && destinoExiste){
    console.log('Boa viagem')
}else{
    console.log('Erro')
}

for(let i = 0; i < 3; i++){
    if (listaDeDestinos[i] == destino){
        destinoExiste = true
        break
    }
}