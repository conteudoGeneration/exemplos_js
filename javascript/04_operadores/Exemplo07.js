let x = 10;
let y = "10";
let z = 10;
let resposta;

resposta = x == y;
console.log("\nO valor de x é igual ao valor de y? " + resposta);

resposta = x === y;
console.log("\nO valor de x é estritamente igual ao valor de y? " + resposta);

resposta = x == z;
console.log("\nO valor de x é igual ao valor de z? " + resposta);

resposta = x === z;
console.log("\nO valor de x é estritamente igual ao valor de z? " + resposta);

resposta = x != y;
console.log("\nO valor de x é diferente do valor de y? " + resposta);

resposta = x !== y;
console.log("\nO valor de x é estritamente diferente o valor de y? " + resposta);

resposta = x != z;
console.log("\nO valor de x é diferente do valor de z? " + resposta);

resposta = x !== z;
console.log("\nO valor de x é estritamente diferente do valor de z? " + resposta);