import { Pessoa } from "./Pessoa";

export interface PessoaFisica extends Pessoa {
    conta: number;
    cpf: number;
    telefone?: number;
}

const pessoaFisica01: PessoaFisica = {
    nome: 'Maria',
    sobrenome: 'Simões',
    conta: 16753432,
    cpf: 34981106084
}

const pessoaFisica02: PessoaFisica = {
    nome: 'Juliana',
    sobrenome: 'Silva',
    conta: 11847743,
    cpf: 82177048052,
    telefone: 21345678
}

console.log(pessoaFisica01);
console.log(pessoaFisica02);