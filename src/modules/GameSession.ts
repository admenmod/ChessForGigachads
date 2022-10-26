import { Player } from "./Player";
import { GameRules } from "./GameRules";
import { GameBoard } from "./GameBoard";


export class GameSession extends EventTarget {
	private _players: Player[] = [];

	constructor(public gameRules: GameRules, public gameBoard: GameBoard) {
		super();
	}

	addPlayer(player: Player) {
		this._players.push(player);
	}
}
