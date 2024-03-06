const listaTeste = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
console.log(`------------------------------------------------`)
const idadeComprador = 15;
const estaAcompanhada = true;
console.log(`Criado: ${listaTeste}`);
listaTeste.push(`Bahia`);//adiciona um item na lista
console.log(`Adicionado: ${listaTeste}`);

if (idadeComprador >= 17){
    console.log('Comprador maior de idade')
    listaTeste.splice(1,1);//apaga um item da lista
    //console.log(`Apagado: ${listaTeste}`);
}else{
    if(estaAcompanhada){
        console.log('Comprador está acompanhado')
        listaTeste.splice(1,1);//apaga um item da lista
        //console.log(`Apagado: ${listaTeste}`);
    }
    else{    
        console.log('Não é maior de Idade e não posso vender')
    }
}
console.log(`Disponiveis: ${listaTeste}`);


console.log(`Mostrar apenas 1 item: ${listaTeste[1]}`);//printa apenas um item da lista
console.log(`Mostrar apenas 2 item: ${listaTeste[1]} e ${listaTeste[2]}`);//printa apenas um item da lista

console.log(`------------------------------------------------`)