import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Components
import Block from './Block';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 18px;
        margin-bottom: 8px;
    }
`;

const StyledPreview = styled.div`
    border: 1px solid var(--wrapper-border-color);
    border-radius: 3px;

    display: grid;
    grid-template-columns: repeat(4, var(--block-size));
`;

export default function PreviewField() {
    const FIRST_ROTATION = 0;

    // Store
    const nextShape = useSelector(state => state.tetromino.nextShape);

    // Render
    return (
        <StyledWrapper>
            <h1>PREVIEW</h1>

            <StyledPreview>
                {nextShape && nextShape[FIRST_ROTATION].map((row, rowIndex) => (
                    row.map((col, colIndex) => (
                        <Block key={`preview-${rowIndex}${colIndex}`} colorIndex={col} />
                    ))
                ))}
            </StyledPreview>
        </StyledWrapper>
    );
}