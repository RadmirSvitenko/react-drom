import styled from '@emotion/styled';
import { AppBar, Box, TextField, Toolbar } from '@mui/material';
import theme from 'theme';

export const CustomSearchContainer = styled(Box)(() => ({
  background: theme.palette.primary.main,
  paddingTop: '130px',
  width: '100%',
  height: '100vh',
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f5f3ee',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(241, 0, 0, 0.952)',
    transition: '0.7s',
    borderRadius: '10px',
    border: '2px solid #f5f3ee',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba(25, 25, 25, 1)',
    transition: '0.7s',
    borderRadius: '10px',
    border: '2px solid #f5f3ee',
  },
}));

export const CustomSearchAppBar = styled(AppBar)(() => ({
  width: '100%',
  height: '120px',
  display: 'flex',
  boxShadow: 'none',
  padding: '0px 30px',
}));

export const CustomSearchToolbar = styled(Toolbar)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: theme.palette.primary.main,
}));

export const CustomSearchInput = styled(TextField)(() => ({
  width: '100%',
  margin: '0px 20px',
  background: '#fff',
  fontSize: '12px',
  borderRadius: '25px',
  transition: '0.5s',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    padding: '0px 20px',
    borderColor: theme.palette.secondary.main,
    fontFamily: theme.fonts.Trebuchet,
    letterSpacing: '1.5px',

    '& fieldset': {
      borderRadius: '25px',
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
    },
    '&:hover fieldset': {
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
      boxShadow: '0px 8px 12px -7px rgba(34, 60, 80, 0.38)',
    },
  },
}));

export const CustomSearchInputBox = styled('form')(() => ({
  display: 'flex',
  flexGrow: '1',
  margin: '0px 100px',
  alignItems: 'center',
}));

export const CustomSearchPopularProductBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: theme.palette.primary.main,
}));
