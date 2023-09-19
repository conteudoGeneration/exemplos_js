let array_nomes = ["Samantha", "Amanda", "Vinicius", "Cauê", "Leonardo"];

array_nomes.sort();

console.log("Array em Ordem Crescente \n");
for (let indice = 0; indice < array_nomes.length; indice++) {
  console.log(array_nomes[indice]);
}

array_nomes.reverse();

console.log("\nArray em Ordem Decrescente \n");
for (let indice = 0; indice < array_nomes.length; indice++) {
  console.log(array_nomes[indice]);
}
