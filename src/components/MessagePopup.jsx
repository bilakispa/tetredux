import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Utils
import { START_GAME, GAME_PAUSED, GAME_OVER } from '../utils/strings';

const StyledWrapper = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    
    background-color: var(--message-popup-bg);

    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
`;

const StyledHeader = styled.h1``;

export default function MessagePopup () {
    // State
    const [message, setMessage] = useState(START_GAME);
    
    // Store
    const gameStarted = useSelector(state => state.game.started);
    const gamePaused = useSelector(state => state.game.paused);

    useEffect(() => {
        if (gameStarted) {
            if (gamePaused) {
                setMessage(GAME_PAUSED);
            } else {
                setMessage("");
            }
        } else {
            if (gamePaused) {
                setMessage(START_GAME);
            } else {
                setMessage(GAME_OVER);
            }
        }
    }, [message, gameStarted, gamePaused]);

    // Render
    return (
        <StyledWrapper hidden={gameStarted && !gamePaused}>
            <StyledHeader>{message}</StyledHeader>
        </StyledWrapper>
    )
}