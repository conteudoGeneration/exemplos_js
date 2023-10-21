// Objeto que define o estoque da Sorveteria
let estoque = {
    Frutas: ["Morango", "Uva", "Banana", "Maçã"],
    Liquidos: ["Gelo", "Água"],
    Suporte: ["Casquinha", "Pote", "Taça"],
    Toppings: ["Chocolate", "Castanha", "Granulado", "Paçoca"],
};

// Variável de checagem se Sorveteria está aberta
let sorveteriaAberta = false;

// Função Pedido
let pedido = (tempo: number, tarefa: any) => {

    return new Promise((resolve, reject) => {

        if (sorveteriaAberta) {

            // Definir a tarefa e o tempo
            setTimeout(() => {

                // Resolver a Tarefa da produção
                resolve(tarefa())

            }, tempo);

        } else {

            // Promisse Rejeitada
            reject(console.log("Sorveteria Fechada!"));

        }

    });
}

// Chamada da função pedido() passando o tempo e a tarefa
pedido(2000, () => console.log(`A fruta ${estoque.Frutas[0]} foi selecionada`))

    // Tarefa 2
    .then(() => {
        return pedido(0, () => console.log('Produção iniciada!'));
    })

    // Tarefa 3
    .then(() => {
        return pedido(2000, () => console.log("Cortando as frutas..."));
    })

    // Tarefa 4
    .then(() => {
        return pedido(1000, () => console.log(`Adicionando ${estoque.Liquidos[0]} e ${estoque.Liquidos[1]} ...`));
    })

    // Tarefa 5
    .then(() => {
        return pedido(1000, () => console.log("Ligando a máquina ..."));
    })

    // Tarefa 6
    .then(() => {
        return pedido(2000, () => console.log(`Inserindo o sorvete na(o) ${estoque.Suporte[1]} ...`));
    })

    // Tarefa 7
    .then(() => {
        return pedido(3000, () => console.log(`Adicionando ${estoque.Toppings[0]} ...`));
    })

    // Tarefa 8
    .then(() => {
        return pedido(2000, () => console.log("Servindo o Sorvete ..."));
    })
    .catch(() => {
        console.log("O Cliente desistiu do Pedido!");
    })
    .finally(() => {
        console.log("Dia Finalizado!");
    });
