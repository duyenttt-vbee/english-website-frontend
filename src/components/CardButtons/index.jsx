import React from 'react';
import { StyledButton, StyledBox } from './index.style';

const CardButtons = ({ onPrevCard, onNextCard, onReturn, currentIndex }) => (
  <>
    <StyledBox>
      <StyledButton
        onClick={onPrevCard}
        className="customButton"
        disabled={currentIndex === 0}
      >
        Previous
      </StyledButton>
      <StyledButton onClick={onNextCard} className="customButton">
        Next
      </StyledButton>
    </StyledBox>
    <StyledBox>
      <StyledButton className="customButton newButton">Finish</StyledButton>
      <StyledButton className="customButton newButton" onClick={onReturn}>
        Back lesson
      </StyledButton>
    </StyledBox>
  </>
);

export default CardButtons;
