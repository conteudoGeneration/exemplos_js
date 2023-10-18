import readline from 'readline-sync';

let resultadoDivisao: number|null;

let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
let numero2: number = readline.questionFloat("Digite o segundo numero: ");

console.log("O Resultado da soma é: " + somar(numero1, numero2));

console.log("O Resultado da subtração é: " + subtrair(numero1, numero2));

console.log("O Resultado da multiplicação é: " + multiplicar(numero1, numero2));

resultadoDivisao = dividir(numero1, numero2);

if ( resultadoDivisao != null)
    console.log("O Resultado da divisão é: " + resultadoDivisao);
else
    console.log("Não existe divisão por zero");

turma();

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function dividir(numero1: number, numero2: number): number|null {
    let divisao = numero1 / numero2;

    return (divisao != Infinity ? divisao : null)
}

function turma(): void {
    console.log("Calculadora construída por...");
}