const leia = require("readline-sync");

let resultado, numero, contador = 1;

while (contador < 4) {

    numero = leia.questionInt("Digite um numero: ");

    resultado = numero * 3;
    console.log(numero + " x 3 = " + resultado);
    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
    contador++;
}

console.log("\t\t_________Fim do programa_________");
