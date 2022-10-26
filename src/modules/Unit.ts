import { ArrayOfGameRules } from "./GameRules";


export abstract class Unit extends EventTarget {
	public abstract rules: ArrayOfGameRules;

	constructor() {
		super();
	}

	abstract move(): void;
}
