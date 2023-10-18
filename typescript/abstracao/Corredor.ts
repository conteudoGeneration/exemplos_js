import { Atleta } from "./Atleta";

export class Corredor extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public cansou(): void{
        console.log("Cansei de correr!");
    }

    public correr(): void{
        console.log("Correndo...");
    }
}