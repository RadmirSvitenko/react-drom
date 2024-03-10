import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import theme from 'theme';

export const AuthorizationContainer = styled(Box)(() => ({
  minWidth: '300px',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px',
  outline: '1px solid #000',
}));

export const AuthorizationTitle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '1px',
  color: '#000',
}));

export const AuthorizationContent = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

export const AuthorizationForm = styled('form')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '30px 0px',
}));

export const AuthorizationField = styled(TextField)(() => ({
  color: '#fff',
  background: theme.palette.secondary.main,
  fontSize: '11px',
  transition: '0.5s',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    letterSpacing: '1.5px',
    padding: '0px 10px 0px 5px',
    fontFamily: theme.typography.fontFamily[1],
    fontWeight: '800',
    borderRadius: '5px',

    '& fieldset': {
      color: '#000',
      transition: '0.5s',
      letterSpacing: '1.5px',
      borderRadius: '5px',
    },
    '&:hover fieldset': {
      color: '#000',
      transition: '0.5s',
    },
    '&.Mui-focused fieldset': {
      transition: '0.5s',
      border: '1px solid #000',
    },
  },
}));

export const AuthorizationEnterButton = styled(Button)(() => ({
  margin: '10px 0px',
  color: '#000',
  background: theme.palette.secondary.main,
  padding: '10px 15px',
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  transition: '0.6s',
  borderRadius: '10px',
  textTransform: 'capitalize',

  ':hover': {
    transition: '0.6s',
    background: '#B6A99E',
    color: '#000',
  },
}));

export const AuthorizationHelperBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

export const AuthorizationHelperText = styled(Box)(() => ({
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],
}));

export const AuthorizationHelperButton = styled(Button)(() => ({
  textTransform: 'capitalize',
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],

  ':hover': {
    textDecoration: 'underline',
    color: '#B6A99E',
  },
}));

export const InputMessage = styled('span')(() => ({
  color: 'red',
  letterSpacing: '1px',
  textAlign: 'center',
}));

export const InputMessageBox = styled('div')(() => ({
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  overflowWrap: 'break-word',
  flexWrap: 'wrap',
}));
