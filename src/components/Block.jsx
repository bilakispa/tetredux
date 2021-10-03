import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    border-style: solid;
    width: var(--block-size);
    height: var(--block-size);
    border-width: var(--border-width);
    border-left-color: var(--border-left-color);
    border-top-color: var(--border-top-color);
    border-right-color: var(--border-right-color);
    border-bottom-color: var(--border-bottom-color);

    background-color: var(--block-color-${props => props.color});
`;

export default function Block({ colorIndex }) {
    // Render
    return (
        <StyledWrapper color={colorIndex} />
    );
}