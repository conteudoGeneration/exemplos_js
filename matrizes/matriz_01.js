let matrizInteiros = [ [ 10, 15, 35 ], [ 70, 120, 140 ], [ 50, 100, 150 ] ];

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha ++){
  
  for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna ++){
    
    console.log(`Matriz [${indiceLinha}][${indiceColuna}]: ${matrizInteiros[indiceLinha][indiceColuna]}`);

  }
  
}
