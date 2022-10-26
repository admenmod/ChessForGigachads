import { Unit } from "./Unit";
import { Vector2 } from "./Vector2";


export type gamerule_t = keyof GameRules;
export type ArrayOfGameRules = Array<gamerule_t>;
export type RulesFunction = (pos: Vector2, target: Vector2, field: Unit[]) => Vector2;


export class GameRules extends EventTarget {
	constructor() {
		super();
	}

	rule1(pos: Vector2, target: Vector2, field: Unit[]): Vector2 {
		return target;
	};
}
