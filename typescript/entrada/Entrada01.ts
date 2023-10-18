import readline from 'readline-sync';

let quantidade;
let altura;
let tipo;
let resposta;
let palavra;

quantidade = readline.questionInt("\nDigite um valor do tipo Inteiro: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor inteiro digitado foi: " + quantidade);

altura = readline.questionFloat("\nDigite um valor do tipo Float: ", {limitMessage: 'Digite um numero float'});
console.log("O valor float digitado foi: " + altura);

tipo = readline.keyIn("\nDigite um valor do tipo Char: ");
console.log("\nO valor char digitado foi: " + tipo);

resposta = readline.keyInYNStrict("\nDigite um valor do tipo Boolean: ");
console.log("O valor boolean digitado foi: " + resposta);

palavra = readline.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi: " + palavra);
