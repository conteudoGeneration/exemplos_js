import { Automovel } from "./Automovel";

export function main() {

    const aut1: Automovel = new Automovel(5, 4, 250.00, "Verde", 4, "EBN-0301", 0);

    aut1.visualizar();

}

main();
