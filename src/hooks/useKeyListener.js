import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import {
	startGame,
	pauseGame,
	resumeGame,
	endGame,
	gameUpdateField,
} from "../actions/game";
import {
	drop,
	moveLeft,
	moveRight,
	getNextTetromino,
	rotate,
} from "../actions/tetromino";

// Hooks
import useKeyPress from "../hooks/useKeyPress";

// Utils
import { getRandomTetromino } from "../utils/gameInfo";
import { canMoveTo, mergeShapeWithField } from "../utils/collision";

export default function useKeyListener() {
	// State
	const [isPressingPause, setIsPressingPause] = useState(false);
	const [isPressingLeft, setIsPressingLeft] = useState(false);
	const [isPressingRight, setIsPressingRight] = useState(false);
	const [isPressingDown, setIsPressingDown] = useState(false);
	const [isPressingUp, setIsPressingUp] = useState(false);

	const startPressed = useKeyPress(" ");
	const pausePressed = useKeyPress(
		"p",
		() => setIsPressingPause(true),
		() => setIsPressingPause(false)
	);
	const leftPressed = useKeyPress(
		"ArrowLeft",
		() => setIsPressingLeft(true),
		() => setIsPressingLeft(false)
	);
	const rightPressed = useKeyPress(
		"ArrowRight",
		() => setIsPressingRight(true),
		() => setIsPressingRight(false)
	);
	const downPressed = useKeyPress(
		"ArrowDown",
		() => setIsPressingDown(true),
		() => setIsPressingDown(false)
	);
	const rotatePressed = useKeyPress(
		"ArrowUp",
		() => setIsPressingUp(true),
		() => setIsPressingUp(false)
	);

	// Store
	const dispatch = useDispatch();
	const gameStarted = useSelector((state) => state.game.started);
	const gamePaused = useSelector((state) => state.game.paused);
	const field = useSelector((state) => state.game.field);
	const currentShape = useSelector((state) => state.tetromino.currentShape);
	const shapeX = useSelector((state) => state.tetromino.x);
	const shapeY = useSelector((state) => state.tetromino.y);
	const rotation = useSelector((state) => state.tetromino.rotation);

	// Handlers
	const handleStartPressed = () => {
		// Start Game
		if (!gameStarted) {
			const startTetromino = getRandomTetromino();
			const nextTetromino = getRandomTetromino();

			dispatch(
				getNextTetromino({
					startShape: startTetromino,
					newShape: nextTetromino,
				})
			);
			dispatch(startGame());
		}
	};

	const handlePausePressed = () => {
		// Pause-Resume Game
		if (gameStarted) {
			if (!gamePaused) {
				dispatch(pauseGame());
			} else {
				dispatch(resumeGame());
			}
		}
	};

	const handleLeftPressed = () => {
		// Move Left
		if (gameStarted && !gamePaused) {
			if (canMoveTo(field, currentShape[rotation], shapeX - 1, shapeY)) {
				dispatch(moveLeft());
			}
		}
	};

	const handleRightPressed = () => {
		// Move Right
		if (gameStarted && !gamePaused) {
			if (canMoveTo(field, currentShape[rotation], shapeX + 1, shapeY)) {
				dispatch(moveRight());
			}
		}
	};

	const handleDownPressed = () => {
		// Drop tetromino
		if (gameStarted && !gamePaused) {
			let endY = shapeY + 1;
			while (canMoveTo(field, currentShape[rotation], shapeX, endY)) {
				endY++;
			}

			dispatch(drop({ y: endY - 1 }));

			const { updatedField, score, gameOver } = mergeShapeWithField(
				field,
				currentShape[rotation],
				shapeX,
				endY - 1
			);
			dispatch(
				gameUpdateField({
					updatedField: updatedField,
					scoreToAdd: score,
				})
			);

			if (!gameOver) {
				const nextTetromino = getRandomTetromino();
				dispatch(getNextTetromino({ newShape: nextTetromino }));
			} else {
				dispatch(endGame());
			}
		}
	};

	const handleRotatePressed = () => {
		// Rotate Clockwise
		if (gameStarted && !gamePaused) {
			const nextRotation = (rotation + 1) % currentShape.length;
			if (canMoveTo(field, currentShape[nextRotation], shapeX, shapeY)) {
				dispatch(rotate({ rotation: nextRotation }));
			}
		}
	};

	// Detect input changes and handle them
	useEffect(() => {
		if (startPressed) {
			handleStartPressed();
		} else if (pausePressed && !isPressingPause) {
			handlePausePressed();
		} else if (leftPressed && !isPressingLeft) {
			handleLeftPressed();
		} else if (rightPressed && !isPressingRight) {
			handleRightPressed();
		} else if (downPressed && !isPressingDown) {
			handleDownPressed();
		} else if (rotatePressed && !isPressingUp) {
			handleRotatePressed();
		}
	});

	return null;
}
