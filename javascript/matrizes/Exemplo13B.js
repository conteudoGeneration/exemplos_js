let matrizInteiros = [ [ 10, 15 ], [ 70, 120 ], [ 50, 100 ] ];

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha ++){
  
  for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna ++){
    
    console.log(`Matriz [${indiceLinha}][${indiceColuna}]: ${matrizInteiros[indiceLinha][indiceColuna]}`);

  }
  
}
