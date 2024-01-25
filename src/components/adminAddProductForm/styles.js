import styled from '@emotion/styled';
import { Box, Button, TextField, TextareaAutosize } from '@mui/material';
import theme from 'theme';

export const AddProductContainer = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  background: theme.palette.primary.main,
}));

export const FormAddProduct = styled('form')(() => ({
  width: '500px',
  gap: '50px',
  padding: '50px 20px',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  boxShadow: '0px 8px 9px 7px rgba(34, 60, 80, 0.36)',
  background: 'rgba(241, 233, 237, 0.8)',
}));

export const CustomInput = styled(TextField)(() => ({
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
    fontWeight: '600',

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

export const CustomTextarea = styled(TextareaAutosize)(() => ({
  borderRadius: '10px',
  width: '500px',
  height: '500px',
  padding: '15px',
  maxWidth: '450px',
  outline: `1px solid ${theme.palette.secondary.main}`,
  transition: 'ease-in-out 0.8s',
  color: '#000',
  fontFamily: theme.fonts.Trebuchet,
  letterSpacing: '1.5px',
  fontWeight: '600',

  '&:focus': {
    color: '#000',
    transition: '0.5s',
    border: '1px solid #000',
  },
}));

export const ImagesContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  width: '400px',
  height: 'auto',
}));

export const AddImages = styled('label')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  outline: `1px solid red`,
  borderRadius: '10px',
}));

export const Image = styled(Box)(({ materialImage }) => ({
  display: materialImage === '' ? 'none' : 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  outline: `1px solid red`,
  borderRadius: '10px',
  position: 'relative',
}));

export const ButtonSubmit = styled(Button)(() => ({
  backgroundColor: '#000',
  borderRadius: '10px',
  padding: '5px 20px',
  transition: '0.5s',
  ':hover': {
    backgroundColor: 'red',
    color: '#fff',
    transition: '0.5s',
  },
}));

export const BoxForFields = styled(Box)(() => ({
  display: 'flex',
  gap: '10px',
  width: '500px',
}));
