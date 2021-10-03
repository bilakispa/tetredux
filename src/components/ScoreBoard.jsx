import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin-bottom: 20px;    
    font-family: 'Press Start 2P', cursive;

    h1 {
        font-size: 18px;
        margin-bottom: 8px;
    }

    h2 {
        
        font-size: 16px;
    }
`;


export default function ScoreBoard() {
    // Store
    const score = useSelector((state) => state.game.score);
    
    // Render
    return (
        <StyledWrapper>
            <h1>SCORE</h1>
            <h2>{score}</h2>
        </StyledWrapper>
    )
}