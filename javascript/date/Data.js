const data = new Date()
console.log("Data e Hora: ", data);

const dataBrasil = data.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
console.log("Data e Hora - Brasília: ", dataBrasil);

const dataInput = new Date("2020-07-01");
console.log("Data input: ", dataInput);

const dataHoraInput = new Date("2020-07-01T12:00:00Z");
console.log("Data e Hora input: ", dataHoraInput);

console.log("Ano: ", data.getFullYear());
console.log("Mês: ", data.getMonth() + 1);
console.log("Dia: ", data.getDate());
console.log("Dia da Semana: ", data.getDay());
console.log("Hora: ", data.getHours());
console.log("Minutos: ", data.getMinutes());
