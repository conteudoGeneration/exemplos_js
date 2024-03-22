const leia = require("readline-sync");

let soma = 0;

/* Vetor que armazenará a soma das colunas*/
let vetorSoma = Array(4)

/*  Cria a matriz que será utilizada como base para definir o número de linhas
    Note que o Array está com o tamanho 5, indicando que a Matriz terá 5 linhas
*/
let matrizInteiros = new Array(5);

/*  Cria o Laço de Repetição For, que será responsável por criar as 5 linhas com 4 colunas
    Note que o Array interno está com o tamanho 4, indicando que cada linha da Matriz 
    terá 4 colunas
*/
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    /*  Para obter o tamanho da linha, precisamos indicar a posição da linha
        dentro da Matriz que estamos lendo. 
        Neste caso, como todas as linhas terão 4 colunas, eu fixei o valor 0
        para pegar o tamanho da linha 0. 
        Poderia também utilizar uma variável pegar o indice de cada linha da matriz
    */
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[0].length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
    }
    
}

console.table(matrizInteiros);

// Observe que os indíces doram invertidos para efetuar a leitura correta das posições da Matriz
for (let indiceColuna = 0; indiceColuna < matrizInteiros[0].length; indiceColuna++){
  
    for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
      
         // Armazena a soma dos elementos da coluna na variável
        soma += matrizInteiros[indiceLinha][indiceColuna];

    }

     // Guarda a soma no vetor auxiliar
     vetorSoma[indiceColuna] = soma;

     // Zera a variável soma, para receber a soma dos elementos da próxima coluna
     soma = 0;
    
}

console.table(vetorSoma);
