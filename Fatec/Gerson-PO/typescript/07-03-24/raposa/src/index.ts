import Aluno from "./aluno";
import Professor from "./professor";
import Pessoa from "./pessoa";

let prf = new Professor(`Masanori`,`aaaa`)
let al = new Aluno(`Pedro`,`09222`)
console.log('Código do professor: ' + prf.codigo +' Nome do Professor: ' + prf.nome)
console.log(al)

//slide de herança e polimorfismo!!
const mostrar = (pessoa: Pessoa) => {
    console.log(pessoa.mostrarInformacoes())
}
mostrar(prf)
mostrar(al)