export class Vector2 {
	public x: number;
	public y: number;

	constructor(x?: number, y?: number) {
		this.x = x || 0;
		this.y = y || 0;
	}

	add(x: Vector2): this {
		this.x = x.x;
		this.y = x.y;

		return this;
	}
}
