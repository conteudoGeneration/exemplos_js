export interface Pessoa{
    nome: string;
    sobrenome: string;
}

const pessoa1: Pessoa = {
    nome: 'Maria',
    sobrenome: 'Simões'
}

const pessoa2: Pessoa = {
    nome: 'Juliana',
    sobrenome: 'Silva'
}

console.log(pessoa1);
console.log(pessoa2);