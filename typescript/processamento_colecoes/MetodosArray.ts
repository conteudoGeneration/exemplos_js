let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("Listar todos os números do Array numeros\n");
numeros.forEach(n => console.log(n));

console.log("\nListar todos os números elevado ao quadrado\n");
numeros.forEach(n => console.log(n ** 2));

console.log("\nMultiplicar todos os números por 3 e retornar um novo array\n");
let numerosMultiplicadosPor3 = numeros.map(n => n * 3);
console.dir(numerosMultiplicadosPor3);

console.log("\nListar todos os números pares\n");
let numerosPares = numeros.filter(n => n % 2 === 0);
console.dir(numerosPares);

console.log("\nListar todos os Estados que contém a palavra Rio\n");
let estadosContemRio = estados.filter(e => e.includes("Rio"));
console.dir(estadosContemRio);

console.log("\nChecar se existe na lista o Estado do Paraná\n");
let estadoParana = estados.some(e => e === "Paraná");
console.log(estadoParana);

console.log("\nChecar se existe na lista os Estados de São Paulo e do Rio de Janeiro\n");
let estadoSPRJ = estados.some(e => {
    return e === "São Paulo" || e === "Rio de Janeiro";
});
console.log(estadoParana);

console.log("\nChecar se todos os números da lista são menores ou iguais a 10\n");
let numerosMenoresIgual10 = numeros.every(n => n <= 10);
console.dir(numerosMenoresIgual10);

console.log("\nChecar se existe na lista o Estado de Minas Gerais\n");
let estadoMinasGerais = estados.includes("Minas Gerais");
console.log(estadoMinasGerais);

console.log("\nSomar todos os elementos do array numeros\n");
let somaNumeros = numeros.reduce((acumulador, numero) => acumulador += numero);
console.log(somaNumeros);

console.log("\nRemover todos os elementos repetidos do array estados\n");
let estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1)
        acumulador.push(estado);
    return acumulador;
}, []);

console.dir(estadosSemRepeticoes);

console.log("\nOrdenar os elementos do array estados em Ordem Crescente\n");
console.dir(estados.sort());

console.log("\nOrdenar os elementos do array numerosDesordenados em Ordem Crescente\n");
console.dir(numerosDesordenados.sort());

console.log("\nOrdenar os elementos do array numerosDesordenados em Ordem Crescente\n");
let numerosOrdenadosAsc = numerosDesordenados
    .sort((a, b) => {
        return a - b
    })
    .map(n => n);
console.dir(numerosOrdenadosAsc);

console.log("\nEncontrar o primeiro número da lista maior do que 9\n");
let numeroMaior9 = numerosRepetidos.find(e => e > 9);
console.log(numeroMaior9);

console.log("\nEncontrar o Índice do primeiro número da lista maior do que 9\n");
let posicaoNumeroMaior9 = numerosRepetidos.findIndex(e => e > 9);
console.log(posicaoNumeroMaior9);
