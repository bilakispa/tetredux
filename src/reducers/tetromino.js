import { TETROMINO_DROP, TETROMINO_MOVE_DOWN, TETROMINO_MOVE_LEFT, TETROMINO_MOVE_RIGHT,TETROMINO_NEXT, TETROMINO_ROTATE } from '../constants/tetromino';

import { INITIAL_POS_X, INITIAL_POS_Y, getEmptyTetromino } from '../utils/gameInfo';

const initialState = {
    currentShape: getEmptyTetromino(),
    nextShape: getEmptyTetromino(),
    x: INITIAL_POS_X,
    y: INITIAL_POS_Y,
    rotation: 0
};

export default function tetromino (state = initialState, { type, payload }) {
    switch(type) {
        case TETROMINO_NEXT:
            return {
                ...state,
                currentShape: payload.startShape ? payload.startShape : state.nextShape,
                nextShape: payload.newShape,
                x: INITIAL_POS_X,
                y: INITIAL_POS_Y,
                rotation: 0
            };
        case TETROMINO_MOVE_DOWN:
            return {
                ...state,
                y: state.y + 1,
            };
        case TETROMINO_MOVE_LEFT:
            return {
                ...state,
                x: state.x - 1,
            };
        case TETROMINO_MOVE_RIGHT:
            return {
                ...state,
                x: state.x + 1,
            };
        case TETROMINO_DROP:
            return {
                ...state,
                y: payload.y
            };
        case TETROMINO_ROTATE:
            return {
                ...state,
                rotation: payload.rotation
            };
        default:
            return state;
    }
}