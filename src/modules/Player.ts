export class Player extends EventTarget {
	constructor(public team: number) {
		super();
	}
}
