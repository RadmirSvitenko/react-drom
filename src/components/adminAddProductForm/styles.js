import styled from '@emotion/styled';
import {
  Box,
  Button,
  MenuItem,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import theme from 'theme';

export const Container = styled(Box)(() => ({
  [theme.breakpoints.down('xl')]: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    minHeight: '100vh',
    height: 'auto',
    display: 'flex',
    background: theme.palette.primary.main,
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const Form = styled('form')(() => ({
  [theme.breakpoints.down('xl')]: {
    width: '100%',
    gap: '30px',
    padding: '50px',
    minHeight: '100vh',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    boxShadow: '0px 8px 9px 7px rgba(34, 60, 80, 0.36)',
    background: 'rgba(241, 233, 237, 0.8)',
  },

  [theme.breakpoints.down('md')]: {
    padding: '0px 100px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '50px 0px',
  },
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
    fontFamily: theme.typography.fontFamily[1],
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
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1.5px',
  fontWeight: '600',

  '&:focus': {
    color: '#000',
    transition: '0.5s',
    border: '1px solid #000',
  },
}));

export const ImagesContainer = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
}));

export const SubcategoriesContainer = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '20px 0px',
}));

export const AddImages = styled('label')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  outline: `1px solid red`,
  borderRadius: '5px',
}));

export const ImageBox = styled(Box)(() => ({
  width: '80px',
  height: '80px',
  borderRadius: '5px',
  display: 'flex',
  position: 'relative',
}));

export const ButtonSubmit = styled(Button)(() => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '50px',
    fontSize: '20px',
    borderRadius: '5px',
  },
  backgroundColor: '#000',
  borderRadius: '5px',
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

export const ErrorMessage = styled('span')(() => ({
  color: 'red',
  letterSpacing: '1px',
  textAlign: 'center',
}));

export const ErrorMessageBox = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflowWrap: 'break-word',
  flexWrap: 'wrap',
}));

export const CustomTitle = styled(Typography)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '2px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
  },
}));

export const CustomMenuItem = styled(MenuItem)(() => ({}));
