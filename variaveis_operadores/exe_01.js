const leia = require('readline-sync');

let salario, abono, novoSalario;

salario = leia.questionFloat("Digite o Salario do Colaboradore (R$): ");

abono = leia.questionFloat("Digite o Abono do Colaboradore (R$): ");

novoSalario = salario + abono;

console.log("O novo Salario do Colaboradore é: " + novoSalario.toFixed(2));
