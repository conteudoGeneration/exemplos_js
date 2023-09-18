const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, media;

nota1 = leia.questionFloat("Digite a primeira Nota: ");

nota2 = leia.questionFloat("Digite a segunda Nota: ");
            
nota3 = leia.questionFloat("Digite a terceira Nota: ");
            
nota4 = leia.questionFloat("Digite a quarta Nota: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("A Média do participante é: " + media.toFixed(2));