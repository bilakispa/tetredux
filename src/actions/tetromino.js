import { TETROMINO_DROP, TETROMINO_MOVE_DOWN, TETROMINO_MOVE_LEFT, TETROMINO_MOVE_RIGHT, TETROMINO_NEXT, TETROMINO_ROTATE } from "../constants/tetromino";

export function getNextTetromino (data) {
    return { type: TETROMINO_NEXT, payload: data };
}

export function moveDown () {
    return { type: TETROMINO_MOVE_DOWN, payload: null };
}

export function moveLeft () {
    return { type: TETROMINO_MOVE_LEFT, payload: null };
}

export function moveRight () {
    return { type: TETROMINO_MOVE_RIGHT, payload: null };
}

export function drop (data) {
    return { type: TETROMINO_DROP, payload: data };
}

export function rotate (data) {
    return { type: TETROMINO_ROTATE, payload: data };
}