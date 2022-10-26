import { Vector2 } from "./Vector2";
import { Unit } from './Unit';


export class GameBoard extends EventTarget {
	public size: Vector2;
	public field: Unit[] = [];

	constructor(size: Vector2) {
		super();

		this.size = size;
	}
}
