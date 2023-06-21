import styled from 'styled-components';
import { Button, Box } from '@mui/material';

export const StyledButton = styled(Button)`
  &&.customButton {
    margin-bottom: 10px;
    width: 10%;
    color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
    margin-right: 20px;
    margin-left: 20px;
  }
  &&.newButton {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
