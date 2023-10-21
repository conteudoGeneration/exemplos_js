const dataAtual = new Date();
console.log("Data e Hora: ", dataAtual);

const dataAtualBR = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
console.log("Data e Hora - Brasília: ", dataAtualBR);