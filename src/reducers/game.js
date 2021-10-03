import { GAME_START, GAME_PAUSE, GAME_RESUME, GAME_OVER, GAME_UPDATE_FIELD } from '../constants/game';
import { getInitialGameField } from '../utils/gameInfo';

const initialState = {
    started: false,
    paused: true,
    score: 0,
    field: getInitialGameField()
};

export default function gameReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GAME_START:
            return {
                ...state,
                started: true,
                paused: false,
                score: 0,
                field: getInitialGameField()
            };
        case GAME_PAUSE:
            return {
                ...state,
                paused: true
            };
        case GAME_RESUME:
            return {
                ...state,
                paused: false
            };
        case GAME_OVER:
            return {
                ...state,
                started: false,
                paused: false
            };
        case GAME_UPDATE_FIELD:
            return {
                ...state,
                field: payload.updatedField,
                score: state.score + payload.scoreToAdd
            };
        default:
            return state;
    }
}