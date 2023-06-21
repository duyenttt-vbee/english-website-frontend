import React from 'react';
import { Container, Button } from '@mui/material';
import { StyledBox, StyledTypography, StyledStack } from './index.style';

const Welcome = () => (
  <StyledBox>
    <Container maxWidth="sm">
      <StyledTypography className="titleTypo">
        Welcome to the cards!
      </StyledTypography>
      <StyledStack className="customStack">
        <Button variant="contained">Create Card</Button>
      </StyledStack>
    </Container>
  </StyledBox>
);

export default Welcome;
