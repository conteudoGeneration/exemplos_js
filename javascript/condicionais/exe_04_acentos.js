const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const question = util.promisify(rl.question).bind(rl);

async function leia(pergunta) {
    try {
        const answer = await question(pergunta);
        return answer;

    } catch (err) {
        console.error('Questão rejeitada!', err);
        return err;
    }
}

async function main(){
    
let palavra1, palavra2, palavra3;
            
palavra1 = await leia("Digite a primeira palavra: ");
console.log(palavra1);

palavra2 = await leia("Digite a primeira palavra: ");
console.log(palavra2);

palavra3 = await leia("Digite a primeira palavra: ");
console.log(palavra3);

rl.close();

if (palavra1 === "vertebrado")
{
    if (palavra2 === "ave")
    {
        if (palavra3 === "carnivoro")
            console.log("águia");
        else
            console.log("pomba");
    }
    else
    {
        if (palavra3 === "onivoro")
            console.log("homem");

        else
            console.log("vaca");
    }
}
else
{
    if (palavra2 === "inseto")
    {
        if (palavra3 === "hematofago")
            console.log("pulga");
        else
            console.log("lagarta");
    }
    else
    {
        if (palavra3 === "hematofago")
            console.log("sanguessuga");
        else
            console.log("minhoca");
    }
    
}

};

main();