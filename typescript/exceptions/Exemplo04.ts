import readline from 'readline-sync';

try {
    
    let idade: number = readline.questionFloat("Digite a idade da Pessoa: ");

    validarIdade(idade);

} catch (error) {
    console.error("Erro:" + error);
}

function validarIdade(idade: number): void {

    if (idade < 18)
        throw new Error("A Pessoa não está apta a dirigir!");
    else
        console.log("A Pessoa está apta a dirigir!");

}
