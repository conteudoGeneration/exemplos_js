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

console.log("\nListar todos os números pares\n");
let numerosPares = numeros.filter(n => n % 2 === 0);
console.dir(numerosPares);

console.log("\nListar todos os Estados que contém a palavra Rio\n");
let estadosContemRio = estados.filter(e => e.includes("Rio"));
console.dir(estadosContemRio);

let estadoParana = estados.some(e => e === "Paraná");
console.log(estadoParana);

let numerosMenoresIgual10 = numeros.every(n => n <= 10);
console.dir(numerosMenoresIgual10);

let estadoMinasGerais = estados.includes("Minas Gerais");
console.log(estadoMinasGerais);

let numerosMultiplicadosPor3 = numeros.map(n => n * 3);
console.dir(numerosMultiplicadosPor3);

let somaNumeros = numeros.reduce((total, n) => total + n);
console.dir(somaNumeros);

let estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1)
        acumulador.push(estado);
    return acumulador;
}, [])

console.dir(estadosSemRepeticoes);

let numerosOrdenadosAsc = numerosDesordenados
    .sort((a, b) => {
        return a - b
    })
    .map(n => n);
console.dir(numerosOrdenadosAsc);

let numerosOrdenadosDesc = numerosDesordenados
    .sort((a, b) => {
        return b - a
    })
    .map(n => n);
console.dir(numerosOrdenadosDesc);

let numeroMaior9 = numerosRepetidos.find(e => e > 9);
console.log(numeroMaior9);

let posicaoNumeroMaior9 = numerosRepetidos.findIndex(e => e > 9);
console.log(posicaoNumeroMaior9);

let estadosSpread: string[] = [...estados, ...estadosCentroOeste];
console.dir(estadosSpread);

let multiplicarRest = (numerador: number, ...lista: number[]) =>{
    return lista.map((numero) => numerador * numero);
}

console.log(multiplicarRest(2, 15, 25, 42));
