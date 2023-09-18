let escopoGlobal = 'mensagem fora do if';

if (true) {
    let escopoLocal = 'mensagem dentro do if';
    console.log(escopoLocal);
}

console.log(escopoGlobal);
console.log(escopoLocal);