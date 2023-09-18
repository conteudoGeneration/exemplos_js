const leia = require("readline-sync");

let numero1, numero2, numero3, numero4, diferenca;

numero1 = leia.questionFloat("Digite o primeiro Numero: ");

numero2 = leia.questionFloat("Digite o segundo Numero: ");

numero3 = leia.questionFloat("Digite o terceiro Numero: ");

numero4 = leia.questionFloat("Digite o quarto Numero: ");

diferenca = numero1 * numero2 - numero3 * numero4;

console.log("A Diferença é: " + diferenca);
