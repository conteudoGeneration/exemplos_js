const leia = require("readline-sync");

let opcao;

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n--Digite 1 para ver Indicação de um Livro--");
console.log("--Digite 2 para ler uma Frase Motivacional--");
console.log("--Digite 3 para receber uma Indicação de música--");

opcao = leia.questionInt();

switch (opcao) {
  case 1:
    console.log("Livro: O Alquimista");
    break;
  case 2:
    console.log("Frase motivacional: Se você cair, levante! Não dá para andar deitado.");
    break;
  case 3:
    console.log("Música: AURORA - No Cure For Me.");
    break;
  default:
    console.log("Opção inválida!");
}
