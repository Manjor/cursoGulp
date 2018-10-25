"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
//Função que recebe uma Vendavel como Parametro
//Ou seja a interface direto
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
//Cria uma instancia de carro que implementa os atributos de Vendavel
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
//chama a função de exibir passando carro
exibir(c);
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
