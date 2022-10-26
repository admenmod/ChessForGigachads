import { ArrayOfGameRules } from "../GameRules";
import { Unit } from "../Unit";

export class King extends Unit {
	public rules: ArrayOfGameRules = ['rule1'];

	constructor() {
		super();
	}

	move(): void {

	}
}
