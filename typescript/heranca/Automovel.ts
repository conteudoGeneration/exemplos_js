import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{

	private _cor: string;
	private _numeroPortas: number;
	private _placa: string;
	private _marcha: number;
	
	constructor(capacidade: number, numeroRodas: number, velocidade: number, cor: string, numeroPortas: number, placa: string, marcha: number) {
		super(capacidade, numeroRodas, velocidade);
		this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._placa = placa;
		this._marcha = marcha;
	}

	public get cor() {
		return this._cor;
	}

	public set cor(cor: string) {
		this._cor = cor;
	}

	public get numeroPortas() {
		return this._numeroPortas;
	}

	public  set numeroPortas(numeroPortas: number) {
		this._numeroPortas = numeroPortas;
	}

	public get placa() {
		return this._placa;
	}

	public set placa(placa: string) {
		this._placa = placa;
	}
	
	public get marcha() {
		return this._marcha;
	}

	public set marcha(marcha: number) {
		this._marcha = marcha;
	}

	public visualizar(): void {

		super.visualizar();
		console.log("cor: " + this._cor);
		console.log("Número de portas: " + this._numeroPortas);
		console.log("Placa: " + this._placa);
		console.log("Marcha: " + this._marcha);
		
	}
}