import styled from 'styled-components';
import {
  Card,
  CardActions,
  Typography,
  CardMedia,
  Button,
} from '@mui/material';

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

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    display: flex;
    font-weight: bold;
    margin-top: 20px;
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

export const StyledButton = styled(Button)`
  &&.customButton {
    margin-bottom: 60px;
    width: 100%;
    color: ${(props) => props.theme.palette.primary.main};
    background-color: #ffff;
    margin-right: 20px;
    margin-left: 20px;
  }
`;
