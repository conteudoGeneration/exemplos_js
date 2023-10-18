import readline from 'readline-sync';

let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
let numero2: number = readline.questionFloat("Digite o segundo numero: ");

console.log("Resultado da soma: ", somar(numero1, numero2));

export function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}
