import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Corredor, Nadador{
    
    constructor(nome: string){
        super(nome);
    }
       
    aquecer(): void {
        console.log("Aquecendo...");
    }
    
    correr(): void {
        console.log("Correndo...");
    }
    
    pedalar(): void {
        console.log("Pedalando...");
    }
     
    nadar(): void {
        console.log("Nadando...");
    }
    
    public cansou(): void {
        console.log("Cansou!");
    }
    
}