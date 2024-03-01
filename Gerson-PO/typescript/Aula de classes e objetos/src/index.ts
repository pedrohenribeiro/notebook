import Produto from "./produto"
import Endereco from "./endereco"
import Empresa from "./empresa"
let produtinho = new Produto()
produtinho.nome = `Rimel`
produtinho.mostrarDetalhes()

let endereco = new Endereco(123,'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let endereco2 = new Endereco(123,'Av. 9 de Julho', 'Jardim Apolo', 'São José dos Campos')

let empresa = new Empresa(endereco, 'razao algo', 'MetaCode', 'cnpj')

console.log(endereco.mostrarEndereco())
console.log(endereco2.mostrarEndereco())

console.log(empresa.mostrarEmpresa())