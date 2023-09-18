const leia = require("readline-sync");

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

salarioBruto = leia.questionFloat("Digite o Salario do Colaboradore: ");

adicionalNoturno = leia.questionFloat("Digite o Adicional Noturno do Colaboradore: ");

horasExtras = leia.questionFloat("Digite o valor das Horas Extras do Colaboradore: ");

descontos = leia.questionFloat("Digite o valor dos Descontos do Colaboradore: ");

salarioLiquido = salarioBruto + adicionalNoturno + horasExtras * 5 - descontos;

console.log("O Salário Liquido do Colaboradore é: " + salarioLiquido);
