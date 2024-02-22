import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import theme from 'theme';

export const RegistrationContainer = styled(Box)(() => ({
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px',
}));

export const RegistrationTitle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '1px',
  color: '#000',
}));

export const RegistrationContent = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

export const RegistrationForm = styled('form')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '30px 0px',
}));

export const RegistrationField = styled(TextField)(() => ({
  color: '#000',
  background: theme.palette.secondary.main,
  fontSize: '11px',
  transition: '0.5s',
  letterSpacing: '1.5px',
  borderRadius: '10px',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    padding: '0px 10px 0px 5px',
    fontFamily: theme.typography.fontFamily[1],
    letterSpacing: '1.5px',
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
      color: '#000',
      transition: '0.5s',
      border: '1px solid #000',
    },
  },
}));

export const RegistrationEnterButton = styled(Button)(() => ({
  color: '#000',
  margin: '10px 0px',
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

export const RegistrationHelperBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  fontFamily: theme.typography.fontFamily[1],
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

export const RegistrationHelperText = styled(Box)(() => ({
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],
}));

export const RegistrationHelperButton = styled(Button)(() => ({
  color: '#000',
  textTransform: 'capitalize',
  fontFamily: theme.typography.fontFamily[1],

  ':hover': {
    textDecoration: 'underline',
    color: '#B6A99E',
  },
}));

export const InputMessage = styled('span')(() => ({
  color: '#fff',
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
