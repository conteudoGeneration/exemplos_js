const leia = require('readline-sync');

let palavra1, palavra2, palavra3;

palavra1 = leia.question("Digite a primeira palavra: ");

palavra2 = leia.question("Digite a segunda palavra: ");

palavra3 = leia.question("Digite a terceira palavra: ");

    if (palavra1 === "vertebrado")
    {
        if (palavra2 === "ave")
        {
            if (palavra3 === "carnívoro")
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