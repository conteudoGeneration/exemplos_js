
// Objeto que define o estoque da Sorveteria
let estoque = {
    Frutas: ["Morango", "Uva", "Banana", "Maçã"],
    Liquidos: ["Gelo", "Água"],
    Suporte: ["Casquinha", "Pote", "Taça"],
    Toppings: ["Chocolate", "Castanha", "Granulado", "Paçoca"],
};

// Função Receber Pedido
let pedido = (fruta: number, executa_producao: any) => {

    // Mensagem
    console.log("Chegou um Pedido!")

    setTimeout(function () {

        console.log(`A fruta ${estoque.Frutas[fruta]} foi selecionada`);

        // Chamada da Função Callback
        executa_producao();
    }, 2000)

};

// Função Iniciar a Produção
let producao = () => {

    setTimeout(() => {
        // Mensagem
        console.log("Iniciar Produção!");
        setTimeout(() => {
            // Cortar as frutas
            console.log("Cortando as frutas...");
            setTimeout(() => {
                // Adicionar água e gelo
                console.log(`Adicionando ${estoque.Liquidos[0]} e ${estoque.Liquidos[1]}...`);
                setTimeout(() => {
                    // Ligar a Máquina
                    console.log("Ligando a máquina");
                    setTimeout(() => {
                        // Selecionar o suporte (casquinha, copinho, entre outros)
                        console.log(`Inserir o sorvete na(o) ${estoque.Suporte[1]}`);
                        setTimeout(() => {
                            // Selecionar os toppings
                            console.log(`Adicionando ${estoque.Toppings[0]}...`);
                            setTimeout(() => {
                                // Servir o sorvete
                                console.log("Servindo o sorvete");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    },0)
};

/* *
*  Chamada da Função Receber Pedido, 
*  passando a Função Produção e 
*  a fruta como argumentos
*/
pedido(0, producao);