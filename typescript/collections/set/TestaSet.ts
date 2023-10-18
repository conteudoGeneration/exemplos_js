
// Cria a Collection Set, do tipo string, chamada frutas e inicializa
const setFrutas: Set<string> = new Set<string>(["Abacate", "Banana", "Jaboticaba", "Kiwi", "Maçã", "Morango", "Pêra", "Jaboticaba"]);

/* Mostra na tela todas as frutas adicionadas.
   Observe que para exibir as frutas utilizamos 
   o Laço for..of */

console.log("\nFrutas cadastradas: ");

for(let fruta of setFrutas)
{
    console.log(fruta);
}

/*Adiciona novas Frutas*/
setFrutas.add("Kiwi");
setFrutas.add("Pitaya");
setFrutas.add("Amora");
setFrutas.add("Caju");

/**
 * Mostra os dados armazenados na Collection Set Observe 
 * que a fruta repetida não foi inserida novamente
 */
console.log("\nFrutas cadastradas: ");

for(let fruta of setFrutas)
{
    console.log(fruta);
}

// Verifica se um elemento está armazenado na Collection Set
console.log("\nExiste a fruta Kiwi? " + setFrutas.has("Kiwi"));

// Remove um elemento da Collection
setFrutas.delete("Kiwi");

console.log("\nKiwi foi removida!\n");

for(let fruta of setFrutas)
{
    console.log(fruta);
}

// Verifica após a remoção se o elemento ainda existe na Collection Set
console.log("\nExiste a fruta Kiwi na Collection? " + setFrutas.has("Kiwi"));

// Limpa a Collection Set
setFrutas.clear();

console.log("\nTodos os itens foram removidos da Collection Set!");

console.log("\nTamanho do set: " + setFrutas.size);