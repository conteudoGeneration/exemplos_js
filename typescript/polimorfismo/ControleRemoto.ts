import { Aviao } from "./aviao";
import { Barco } from "./barco";
import { Carro } from "./carro";

export function main() {

    const aviao: Aviao = new Aviao();
    const barco: Barco = new Barco();
    const carro: Carro = new Carro();

    aviao.mover();
    barco.mover();
    carro.mover();

}

main();