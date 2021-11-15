import {
	GAME_PAUSE,
	GAME_RESUME,
	GAME_START,
	GAME_OVER,
	GAME_UPDATE_FIELD,
} from "../constants/game";

export function startGame() {
	return { type: GAME_START, payload: null };
}

export function pauseGame() {
	return { type: GAME_PAUSE, payload: null };
}

export function resumeGame() {
	return { type: GAME_RESUME, payload: null };
}

export function endGame() {
	return { type: GAME_OVER, payload: null };
}

export function gameUpdateField(data) {
	return { type: GAME_UPDATE_FIELD, payload: data };
}
