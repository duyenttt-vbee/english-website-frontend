import React from 'react';
import { CardContent, Grid } from '@mui/material';
import {
  StyledCard,
  StyledCardActions,
  StyledTypography,
  StyledCardMedia,
  StyledButton,
} from './index.style';

const CardItem = ({ card }) => (
  <Grid>
    <StyledCard className="customCard">
      <CardContent sx={{ flexGrow: 1 }}>
        <StyledTypography className="titleTypo">{card.name}</StyledTypography>
      </CardContent>
      <StyledCardMedia image={card.imageUrl} />
      <StyledCardActions>
        <StyledButton className="customButton">Edit</StyledButton>
        <StyledButton className="customButton">Delete</StyledButton>
      </StyledCardActions>
    </StyledCard>
  </Grid>
);

export default CardItem;
