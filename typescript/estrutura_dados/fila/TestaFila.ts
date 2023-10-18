import { Queue } from "./Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i);
}

console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();

console.log("\nRemover Elemento: " + fila.dequeue());

console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();

console.log("\nAdicionar Elemento 11: ");
            
fila.enqueue(11);

console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();

console.log("\nExibir o Primeiro Elemento da fila: " + fila.peek());

console.log("\nExibir o Tamanho da fila: " + fila.count());

console.log("\nChecar se o Elemento 4 existe na fila? " + fila.contains(4));

console.log("\nChecar se o Elemento 14 existe na fila? " + fila.contains(14));

console.log("\nLimpar a fila");

fila.clear();

console.log("\nA fila está vazia? " + fila.isEmpty());