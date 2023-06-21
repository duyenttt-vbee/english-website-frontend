import styled from 'styled-components';
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardActions,
  CardMedia,
} from '@mui/material';

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled(Box)`
  padding-top: 64px;
  padding-bottom: 48px;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    font-size: 3.5rem;
    text-align: center;
    color: ${(props) => props.theme.palette.text.primary};
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
`;

export const StyledStack = styled(Stack)`
  &&.customStack {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    margin: 8px;
    color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.newButton {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

export const ButtonGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding-top: 30px;
  margin: 0 auto;
  place-content: center;
`;

export const StyledCard = styled(Card)`
  &&.customCard {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 350px;
    border-radius: 10px;
    background-color: #98f5ff;
    box-shadow: 0px 0px 5px ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledCardTypography = styled(Typography)`
  &&.titleTypo {
    display: flex;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 4rem;
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  display: flex;
  justify-content: center;
  width: 65%;
  padding-top: 65%;
  margin-bottom: 10%;
`;

export const StyledCardButton = styled(Button)`
  &&.customButton {
    margin-bottom: 60px;
    width: 100%;
    color: ${(props) => props.theme.palette.primary.main};
    background-color: #ffff;
    margin-right: 20px;
    margin-left: 20px;
  }
`;