
tipoProduto(40);

tipoProduto('M');

function tipoProduto(tamanho: number | string): void{
    if (typeof(tamanho) === "number" )
        console.log("\nO Tamanho é um número");
    else
        console.log("\nO Tamanho é uma string");
}