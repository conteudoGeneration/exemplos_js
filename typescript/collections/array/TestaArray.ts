// Cria um array, do tipo number, chamado notas e inicializa
const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

/* Mostra na tela todas as notas adicionadas.
   Observe que para exibir as notas utilizamos 
   o Laço for..of */

console.log("\nNotas cadastradas: ");

for(let nota of notas){

    console.log(nota.toFixed(1));

}

/*Adiciona uma nova Nota - duplicada */
notas.push(4.0);

/**
 * Exibe na tela todas as notas, 
 * inclusive a nota duplicada.
 */
console.log("\nNotas cadastradas: ");

for(let nota of notas){

    console.log(nota.toFixed(1));

}

/*Adiciona várias notas no início do array */
notas.unshift(2.5, 9.0);

/**
 * Exibe na tela todas as notas.
 */
console.log("\nNotas cadastradas: ");

for(let nota of notas){

    console.log(nota.toFixed(1));

}

/**
 * Mostra a posição (indice) de uma determinada nota. 
 * Caso existam 2 notas iguais será exibida a posição 
 * da primeira nota encontrada.
 */
console.log("\nA posição da nota 5 é: " + notas.indexOf(5));

// Mostra se uma determinada nota existe no array
console.log("\nA nota 5 existe no array? " + notas.includes(5));

// Mostra a nota inserida em uma determinada posição (indice)
console.log("\nNa posição 1 da array, a nota é: " + notas[1]);

// Altera a nota 5.0 para 6.0 e mostra que a alteração foi efetuada
notas[notas.indexOf(5)] = 6.0;

console.log("\nA nota 5 foi alterada para 6: ");

for(let nota of notas){

    console.log(nota.toFixed(1));

}

/**
 *  Apaga a nota 4.0 e mostra que a exclusão foi efetuada.
 *  Observe que apenas a primeira nota 4.0 foi apagada.
 */
notas.splice(notas.indexOf(4.0), 1);

console.log("\nA 1º nota 4 foi apagada? ");

for(let nota of notas){

    console.log(nota.toFixed(1));

}

// Exibe o tamanho do array (numero de elementos)
console.log("\nO tamanho do array é: " + notas.length);

// Limpa o array e mostra que ele está vazio
notas.length = 0;

console.log("\nO array está vazio!");

console.log("\nO tamanho do array é: " + notas.length);