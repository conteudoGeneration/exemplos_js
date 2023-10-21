// Objeto que define o estoque da Sorveteria
let estoque = {
    Frutas: ["Morango", "Uva", "Banana", "Maçã"],
    Liquidos: ["Gelo", "Água"],
    Suporte: ["Casquinha", "Pote", "Taça"],
    Toppings: ["Chocolate", "Castanha", "Granulado", "Paçoca"],
};

// Variável de checagem se Sorveteria está aberta
let sorveteriaAberta = true;

// Função que define o tempo de execução da tarefa
async function tempo(tempoMs: number) {
    return new Promise((resolve, reject) => {

        if (sorveteriaAberta) {
            setTimeout(resolve, tempoMs);
        }

        else {
            reject(console.log("Sorveteria Fechada!"));
        }
    });
}

// Função sorveteria, que engloba pedidos e producao
async function sorveteria() {

    try {

        await tempo(2000);
        console.log(`A fruta ${estoque.Frutas[0]} foi selecionada`);

        await tempo(0);
        console.log('Produção iniciada!');

        await tempo(2000);
        console.log("Cortando as frutas...");

        await tempo(1000);
        console.log(`Adicionando ${estoque.Liquidos[0]} e ${estoque.Liquidos[1]} ...`);

        await tempo(1000);
        console.log("Ligando a máquina ...");

        await tempo(2000);
        console.log(`Inserindo o sorvete na(o) ${estoque.Suporte[1]} ...`);

        await tempo(3000);
        console.log(`Adicionando ${estoque.Toppings[0]} ...`);

        await tempo(2000);
        console.log("Servindo o Sorvete ...");

    }catch (error) {
        console.log("O Cliente desistiu do Pedido!");
    }
}

sorveteria(); 