const resultado2 = somar(10, 20);
console.log("Soma com 2 parâmetros: ", resultado2);

const resultado3 = somar(10, 20, 30);
console.log("Soma com 3 parâmetros: ", resultado3);

function somar(numero1: number, numero2: number, numero3?: number): number{
    
    if(numero3 != undefined)
        return numero1 + numero2 + numero3;

    return numero1 + numero2;
}