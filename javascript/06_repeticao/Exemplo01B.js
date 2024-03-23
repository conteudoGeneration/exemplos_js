const leia = require("readline-sync");

let nome;
let contador;

for (contador = 1; contador < 4; contador++) {
    nome = leia.question("Digite um nome: ");
    console.log("O " + contador + "º nome digitado foi: " + nome);
}
