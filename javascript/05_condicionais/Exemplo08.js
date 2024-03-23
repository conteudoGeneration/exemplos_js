var escopoGlobal = 'mensagem fora do if';

if (true) {
    var escopoLocal = 'mensagem dentro do if';
    console.log(escopoLocal);
}

console.log(escopoGlobal);
console.log(escopoLocal);