import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import theme from 'theme';

export const RegistrationContainer = styled(Box)(() => ({
  minWidth: '300px',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px',
}));

export const RegistrationTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '18px',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '1px',
  color: '#fff',
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
  fontSize: '12px',
  transition: '0.5s',
  letterSpacing: '1.5px',
  borderRadius: '10px',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    padding: '0px 10px 0px 5px',
    fontFamily: theme.fonts.Trebuchet,
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
  margin: '20px 0px',
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

export const RegistrationHelperBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

export const RegistrationHelperText = styled(Box)(() => ({
  color: '#fff',
}));

export const RegistrationHelperButton = styled(Button)(() => ({
  color: '#fff',
  textTransform: 'capitalize',
  ':hover': {
    textDecoration: 'underline',
    color: '#ff2222',
  },
}));
