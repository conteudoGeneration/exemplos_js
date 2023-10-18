import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Prato Verde");
pilha.push("Prato Azul");
pilha.push("Prato Branco");
pilha.push("Prato Amarelo");
pilha.push("Prato Vermelho");

console.log("\nExibir todos os Elementos da pilha: ");

pilha.printStack();

console.log("\nRemover Elemento: " + pilha.pop());

console.log("\nExibir todos os Elementos da pilha: ");

pilha.printStack();

console.log("\nAdicionar Elemento 11: ");

pilha.push("Prato Roxo");

console.log("\nExibir todos os Elementos da pilha: ");

pilha.printStack();

console.log("\nExibir o Primeiro Elemento da pilha: " + pilha.peek());

console.log("\nExibir o Tamanho da pilha: " + pilha.count());

console.log("\nChecar se o Elemento Prato Verde existe na pilha? " + pilha.contains("Prato Verde"));

console.log("\nChecar se o Elemento Prato Verde Limão existe na pilha? " + pilha.contains("Prato Verde Limão"));

console.log("\nLimpar a pilha");

pilha.clear();

console.log("\nA pilha está vazia? " + pilha.isEmpty());