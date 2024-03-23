const leia = require("readline-sync");

let soma = 0;

let vetorSoma = Array(4)
let matrizInteiros = new Array(5);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha ++){
    matrizInteiros[indiceLinha] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
    }
    
}

console.table(matrizInteiros);


for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceColuna].length; indiceColuna++){
  
    for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
      
        soma += matrizInteiros[indiceLinha][indiceColuna];

    }

     vetorSoma[indiceColuna] = soma;

     soma = 0;
    
}

console.table(vetorSoma);
