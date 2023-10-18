import readline from 'readline-sync';
import { ExcecaoSimples } from './ExcecaoSimples';

let resultado: number | null;
let loop: boolean = true;

do {
    try {
        let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
        let numero2: number = readline.questionFloat("Digite o segundo numero: ");

        resultado = dividir(numero1, numero2);

        console.log("O Resultado da divisão é: " + resultado);

        loop = false;

    } catch (error) {
        console.error("Erro: " + error);
    }
} while (loop);

function dividir(numero1: number, numero2: number): number | null {

    if (numero2 == 0)
        throw new ExcecaoSimples("Não existe divisão por zero!");

    return numero1 / numero2;
}
