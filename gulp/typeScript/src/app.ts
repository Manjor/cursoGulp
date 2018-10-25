import { Carro, Vendavel } from './produto'

//Função que recebe uma Vendavel como Parametro
//Ou seja a interface direto
function exibir(v: Vendavel) {
    console.log(`${v.nome} custa ${v.preco}!`)
}

//Cria uma instancia de carro que implementa os atributos de Vendavel
const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
//chama a função de exibir passando carro
exibir(c)
function soma(a:number,b:number){
    return a + b
}

console.log(soma(2,3))