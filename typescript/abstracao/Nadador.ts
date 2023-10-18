import { Atleta } from "./Atleta";

export class Nadador extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public cansou(): void{
        console.log("Cansei de nadar!");
    }

    public nadar(): void{
        console.log("Nadando...");
    }
}