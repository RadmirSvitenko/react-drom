import styled from '@emotion/styled';
import { Box, Menu, TextField } from '@mui/material';
import theme from 'theme';
import avatar from 'assets/images/account-avatar.png';

export const HeaderAppBar = styled('header')(() => ({
  width: '100%',
  height: '90px',
  backgroundColor: '#FAFAFA',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: '1000',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
  },
}));

export const HeaderToolbar = styled('nav')(() => ({
  height: '100%',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const HeaderContentBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const HeaderIconBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    width: '100%',
    gap: '10px',
    padding: '10px 0px',
  },
}));

export const HeaderBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '0px 50px',

  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

export const LogoBox = styled(Box)(() => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

  '&:hover': {
    cursor: 'pointer',
  },
}));

export const HeaderAccount = styled(Box)(() => ({
  borderRadius: '50%',
  backgroundImage: `url(${avatar})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  padding: '20px',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    padding: '15px',
  },
}));

export const HeaderTextStyle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontWeight: '500',
  fontSize: '14px',
  textTransform: 'uppercase',
  borderRadius: '5px',
  color: '#FAFAFA',
  padding: '5px 15px',
  transition: '0.5s',
  ':hover': {
    cursor: 'pointer',
    background: '#FAFAFA',
    color: '#5D5146',
    transition: '0.5s',
  },
}));

export const HeaderCategoryBox = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  height: '40px',
  borderBottom: '2px solid #A49989',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#5D5146',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
}));

export const HeaderContentText = styled(Box)(() => ({
  color: theme.palette.secondary.main,
}));

export const SearchField = styled(TextField)(() => ({
  outline: '1px solid #000',
  borderRadius: '4px',

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transition: '0.5s',
    },

    '&:hover fieldset': {
      transition: '0.5s',
    },

    '&.Mui-focused fieldset': {
      transition: '0.5s',
    },
    '& .MuiInputLabel-outlined': {
      color: '#000',
    },

    padding: '0px 10px',
    margin: 0,
    transition: '0.5s',
  },

  [theme.breakpoints.down('xl')]: {
    width: '540px',
  },

  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },

  [theme.breakpoints.down('md')]: {
    width: '400px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '220px',
  },
}));

export const CustomAccountMenu = styled(Menu)(() => ({
  position: 'absolute',
  top: '0',
}));
