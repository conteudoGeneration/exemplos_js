export class ExcecaoSimples extends Error {

    constructor(message: string) {
        super();
        this.name = 'Exceção Simples'
        this.message = message;
    }
}