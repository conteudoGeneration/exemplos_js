import { Pessoa } from "./Pessoa";

export interface PessoaJuridica extends Pessoa {
    conta: number;
    cnpj: number;
}

const pessoaJuridica: PessoaJuridica = {
    nome: 'Maria',
    sobrenome: 'Simões',
    conta: 13635686,
    cnpj: 99551026000195
}

console.log(pessoaJuridica);