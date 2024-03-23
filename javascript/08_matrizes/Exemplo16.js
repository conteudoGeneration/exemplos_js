const leia = require("readline-sync");

let soma = 0;

let vetorSoma = Array(4)
let matrizInteiros = new Array(4);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
    }
    
}

console.table(matrizInteiros);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
      
         // Armazena a soma dos elementos da coluna na variável
        soma += matrizInteiros[indiceColuna][indiceLinha];

    }

     // Guarda a soma no vetor auxiliar
     vetorSoma[indiceLinha] = soma;

     // Zera a variável soma, para receber a soma dos elementos da próxima coluna
     soma = 0;
    
}

console.table(vetorSoma);
