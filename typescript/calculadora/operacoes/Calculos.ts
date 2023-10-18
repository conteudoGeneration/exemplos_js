
export function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

export function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

export function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

export function dividir(numero1: number, numero2: number): number | null {
    let divisao = numero1 / numero2;

    return (divisao != Infinity ? divisao : null)
}

export function turma(): void {
    console.log("Calculadora construída por...");
}
