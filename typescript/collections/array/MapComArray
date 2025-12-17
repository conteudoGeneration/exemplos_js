// 12_array_map_examples.ts
// Exemplos de uso de arrays e do método map() em TypeScript

// -------------------------------
// Exemplo básico de array
// -------------------------------
const numerosBasicos: number[] = [1, 2, 3, 4, 5];
console.log(numerosBasicos);

// -------------------------------
// Percorrendo arrays com for
// -------------------------------
const nomes: string[] = ["Ana", "Bruno", "Carlos"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// -------------------------------
// Exemplo 1: Dobrar valores de um array
// -------------------------------
const numeros: number[] = [1, 2, 3, 4];

const numerosDobrados: number[] = numeros.map((num: number) => num * 2);

console.log(numerosDobrados);
// [2, 4, 6, 8]

// -------------------------------
// Exemplo 2: Extrair dados de objetos
// -------------------------------
type Aluno = {
  nome: string;
  nota: number;
};

const alunos: Aluno[] = [
  { nome: "Lucas", nota: 8 },
  { nome: "Mariana", nota: 9 },
  { nome: "Carlos", nota: 7 }
];

const nomesAlunos: string[] = alunos.map((aluno: Aluno) => aluno.nome);

console.log(nomesAlunos);
// ["Lucas", "Mariana", "Carlos"]

// -------------------------------
// Exemplo 3: Transformar strings
// -------------------------------
const linguagens: string[] = ["javascript", "python", "java"];

const linguagensMaiusculas: string[] = linguagens.map(
  (linguagem: string) => linguagem.toUpperCase()
);

console.log(linguagensMaiusculas);
// ["JAVASCRIPT", "PYTHON", "JAVA"]

// -------------------------------
// Exemplo 4: Utilizando o índice
// -------------------------------
const valores: number[] = [10, 20, 30];

const valoresFormatados: string[] = valores.map(
  (valor: number, indice: number) => {
    return `Posição ${indice}: ${valor}`;
  }
);

console.log(valoresFormatados);
// ["Posição 0: 10", "Posição 1: 20", "Posição 2: 30"]
