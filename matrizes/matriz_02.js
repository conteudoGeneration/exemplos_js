const leia = require("readline-sync");

let matrizInteiros = new Array(3);

matrizInteiros[0] = new Array(3);
matrizInteiros[1] = new Array(3);
matrizInteiros[2] = new Array(3);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
      
      matrizInteiros[indiceLinha] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
    }
    
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha ++){
  
  for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna ++){
    
    console.log(`Matriz [${indiceLinha}][${indiceColuna}]: ${matrizInteiros[indiceLinha][indiceColuna]}`);

  }
  
}
