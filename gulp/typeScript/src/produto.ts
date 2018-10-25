//Com typeScript é possível definir interfaces
export interface Vendavel {
    //Possível realizar a definição de tipos para atributos
    nome: string
    preco: number
}
//Classe que implementa uma interface
export class Carro implements Vendavel {
    nome: string
    preco: number
}
