import React from 'react';
import styled from 'styled-components';

// Components
import GameField from './components/GameField';
import PreviewField from './components/PreviewField';
import ScoreBoard from './components/ScoreBoard';
import MessagePopup from './components/MessagePopup';
import Instructions from './components/Instructions';
import KeyListener from './components/KeyListener';

import GithubLogo from './github-logo.png';

const StyledWrapper = styled.div`
  background: #fff3e0;
  height: 100vh;
`;

const StyledHeader = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;

  h1 {
    font-size: 1.75em;
  }

  h2 {
    font-size: 1.25em;
  }

  i {
    color: #a0a0a0;
  }
`;

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFooter = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #212121;
    font-weight: bold;
  }
`;

const StyledGameField = styled.div`
  position: relative;
`;

const StyledStats = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function App() {
  // Render
  return (
    <StyledWrapper>
      <StyledHeader>
        <h1>TETREDUX</h1>
        <h2>A <i>match-falling-blocks</i> clone, created with react &amp; redux</h2>
      </StyledHeader>
      
      <StyledBody>
        <StyledGameField>
          <GameField />
          
          <MessagePopup />
        </StyledGameField>
        
        <StyledStats>
          <PreviewField />
          <ScoreBoard />
          <Instructions />
        </StyledStats>

      </StyledBody>

      <StyledFooter>
        <img src={GithubLogo} width="20px" alt="Github Logo" />
        <a href="https://github.com/bilakispa/tetredux">Github Repo</a>
      </StyledFooter>

      <KeyListener />
    </StyledWrapper>
  );
}

export default App;
