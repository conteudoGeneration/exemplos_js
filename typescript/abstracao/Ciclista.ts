import { Atleta } from "./Atleta";

export class Ciclista extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public cansou(): void{
        console.log("Cansei de pedalar!");
    }

    public pedalar(): void{
        console.log("Pedalando...");
    }
}