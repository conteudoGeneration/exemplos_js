import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {

	private _numeroRodas: number;
	private _velocidade: number;

	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
		super(capacidade);
		this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

	public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade;
	}

	public visualizar(): void {
		super.visualizar();
		console.log("Número de rodas: " + this.numeroRodas);
		console.log("Velocidade: " + this.velocidade.toFixed(2));
	}
}
