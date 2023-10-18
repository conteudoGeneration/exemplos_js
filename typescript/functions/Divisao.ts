let resposta: any;

resposta = divisao(4, 0);

if (resposta != null)
    console.log("O Resultado da divisão é: " + resposta);
else
    console.log("Não existe divisão por zero");

function divisao(numero1: number, numero2: number): number|null {
    let divisao = numero1 / numero2;

    return (divisao != Infinity ? divisao : null)
}