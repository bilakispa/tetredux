import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Components
import Block from './Block';

// Hooks
import useInterval from '../hooks/useInterval';

// Actions
import { endGame } from '../actions/game';
import { moveDown, getNextTetromino } from '../actions/tetromino';

// Utils
import { getRandomTetromino } from '../utils/gameInfo';
import { canMoveTo, mergeShapeWithField } from '../utils/collision';
import { gameUpdateField } from '../actions/game';

const StyledWrapper = styled.div`
    border: 1px solid var(--wrapper-border-color);
    border-radius: 3px;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(20, 1fr);
    grid-gap: 0;
`;

export default function GameField() {
    // Store
    const dispatch = useDispatch();
    const gameStarted = useSelector(state => state.game.started);
    const gamePaused = useSelector(state => state.game.paused);
    const field = useSelector(state => state.game.field);
    const currentShape = useSelector(state => state.tetromino.currentShape);
    const shapeX = useSelector(state => state.tetromino.x);
    const shapeY = useSelector(state => state.tetromino.y);
    const rotation = useSelector(state => state.tetromino.rotation);

    useInterval(() => {
        if (!gameStarted || gamePaused) {
            return;
        }

        if (canMoveTo(field, currentShape[rotation], shapeX, shapeY + 1)) {
            dispatch(moveDown());
        } else {
            const { updatedField, score, gameOver } = mergeShapeWithField(field, currentShape[rotation], shapeX, shapeY);
            dispatch(gameUpdateField({ updatedField: updatedField, scoreToAdd: score }));

            if (!gameOver) {
                const nextTetromino = getRandomTetromino();
                dispatch(getNextTetromino({ newShape: nextTetromino }));
            } else {
                dispatch(endGame());
            }
        }
    }, 400);

    // Render
    return (
        <StyledWrapper>
            {field.map((row, rowIndex) => (
                row.map((col, colIndex) => {
                    const currentBlock = currentShape[rotation];
                    const blockX = colIndex - shapeX;
                    const blockY = rowIndex - shapeY;
                    let color = col;

                    // check where moving shape is according to field
                    if (blockX >= 0 && blockX < 4 && blockY >= 0 && blockY < 4) {
                        color = currentBlock[blockY][blockX] === 0 ? col : currentBlock[blockY][blockX];
                    }
                
                    return <Block key={`field-${rowIndex}${colIndex}`} colorIndex={color} />;
                })
            ))}
        </StyledWrapper>
    )
}