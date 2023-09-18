const leia = require("readline-sync");

let nota1, nota2, media;

nota1 = leia.questionFloat("Digite a primeira Nota: ");

nota2 = leia.questionFloat("Digite a segunda Nota: ");

media = (nota1 + nota2) / 2;

if (media >= 6) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}
