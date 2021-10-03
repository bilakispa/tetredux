import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1 {
        font-size: 1.5em;
    }
`;

const StyledShortcut = styled.div`
    display: flex;
    align-items: center;

    kbd {
        background-color: #eee;
        border-radius: 3px;
        border: 1px solid #b4b4b4;
        box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 2px 0 0 rgb(255 255 255 / 70%) inset;
        color: #333;
        display: inline-block;
        font-size: .85em;
        font-weight: 700;
        line-height: 1;
        padding: 2px 4px;
        white-space: nowrap;
    }

    span::before {
        content: ': ';
        margin-left: 5px;
    }

    span {
        font-weight: bold;
    }
`;

export default function Instructions () {
    // Render
    return (
        <StyledWrapper>
            <h1>Instructions</h1>
            
            <StyledShortcut>
                <kbd>Space</kbd>
                <span>Start Game</span>
            </StyledShortcut>
            <StyledShortcut>
                <kbd>P</kbd>
                <span>Pause / Resume</span>
            </StyledShortcut>
            <StyledShortcut>
                <kbd>&larr;</kbd>/<kbd>&rarr;</kbd>
                <span>Move Left / Right</span>
            </StyledShortcut>
            <StyledShortcut>
                <kbd>&darr;</kbd>
                <span>Drop</span>
            </StyledShortcut>
            <StyledShortcut>
                <kbd>&uarr;</kbd>
                <span>Rotate</span>
            </StyledShortcut>
        </StyledWrapper>
    );
}