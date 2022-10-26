import { Vector2, Vector2_t } from "./modules/Vector2";
import { GameBoard } from "./modules/GameBoard";
import { GameRules } from "./modules/GameRules";
import { GameSession } from "./modules/GameSession";
import { Player } from "./modules/Player";


export class App {
	public gameBoard!: GameBoard;
	public gameRules!: GameRules;
	public gameSessions: GameSession[] = [];

	constructor() {
		if(App._example) return App._example;
	}

	private static _example: App;

	public init(size: Vector2): void {
		this.gameBoard = new GameBoard(new Vector2(size.x, size.y));
		this.gameRules = new GameRules();
	}

	public createSession(countPlayers: number = 2) {
		countPlayers = Math.max(countPlayers, 2);

		const session: GameSession = new GameSession(this.gameRules, this.gameBoard);

		for(let i = 0; i < countPlayers; i++) session.addPlayer(new Player(i));

		this.gameSessions.push(session);
	}

	public start(): void {}
	public stop(): void {}
}
