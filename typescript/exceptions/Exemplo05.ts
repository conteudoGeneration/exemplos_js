import readline from 'readline-sync';

let loop: boolean = true;

do {
    try {

        let idade: number = readline.questionFloat("Digite a idade da Pessoa: ");

        validarIdade(idade);

        loop = false;

    } catch (error) {
        if (error instanceof Error)
            console.error("Erro: Digite um número inteiro maior ou igual a 18!");
        else
            console.error("Erro:" + error);
    }
} while (loop);

function validarIdade(idade: number): void {

    if (idade < 18)
        throw new Error("A Pessoa não está apta a dirigir!");
    else
        console.log("A Pessoa está apta a dirigir!");

}
