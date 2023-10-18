import readline from 'readline-sync';
import { dividir, multiplicar, somar, subtrair, turma } from './operacoes/Calculos';


let resultadoDivisao: any;

let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
let numero2: number = readline.questionFloat("Digite o segundo numero: ");

console.log("O Resultado da soma é: " + somar(numero1, numero2));

console.log("O Resultado da subtração é: " + subtrair(numero1, numero2));

console.log("O Resultado da multiplicação é: " + multiplicar(numero1, numero2));

resultadoDivisao = dividir(numero1, numero2);

if (resultadoDivisao != null)
    console.log("O Resultado da divisão é: " + resultadoDivisao);
else
    console.log("Não existe divisão por zero");

turma();

