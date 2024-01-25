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
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '18px',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '1px',
  color: '#fff',
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
  fontSize: '12px',
  transition: '0.5s',
  letterSpacing: '1.5px',
  borderRadius: '10px',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    letterSpacing: '1.5px',
    padding: '0px 10px 0px 5px',
    fontFamily: theme.fonts.Trebuchet,
    fontWeight: '800',

    '& fieldset': {
      color: '#000',
      transition: '0.5s',
      letterSpacing: '1.5px',
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
  margin: '20px 0px',
  color: '#000',
  background: theme.palette.secondary.main,
  padding: '10px 15px',
  fontFamily: theme.fonts.Trebushet,
  letterSpacing: '1px',
  transition: '0.6s',
  borderRadius: '10px',

  ':hover': {
    transition: '0.6s',
    background: '#C4C2BE',
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
  color: '#fff',
}));

export const AuthorizationHelperButton = styled(Button)(() => ({
  color: '#fff',
  textTransform: 'capitalize',
  ':hover': {
    textDecoration: 'underline',
    color: '#ff2222',
  },
}));
