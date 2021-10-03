import { combineReducers } from "redux";

import gameReducer from "./game";
import tetrominoReducer from './tetromino';

export default combineReducers({
    game: gameReducer,
    tetromino: tetrominoReducer
});