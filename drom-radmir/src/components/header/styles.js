import styled from '@emotion/styled';
import { Box, Menu, TextField } from '@mui/material';
import theme from 'theme';
import avatar from 'assets/images/account-avatar.png';

export const HeaderAppBar = styled('header')(() => ({
  width: '100%',
  height: '130px',
  backgroundColor: '#FAFAFA',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const HeaderToolbar = styled('nav')(() => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  flexDirection: 'column',
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
    display: 'none',
  },
}));

export const HeaderBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
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
    display: 'none',
  },
}));

export const HeaderTextStyle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontWeight: '500',
  fontSize: '14px',
  textTransform: 'uppercase',
  borderRadius: '10px',
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

export const HeaderCategoryBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '40px',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#5D5146',
  position: 'sticky',
  top: '0',
}));

export const HeaderContentText = styled(Box)(() => ({
  color: theme.palette.secondary.main,
}));

export const SearchField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    padding: '0px 10px',
    margin: 0,
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
    width: '200px',
  },
  outline: '0.5px solid #E7E5E4',
}));

export const CustomAccountMenu = styled(Menu)(() => ({
  position: 'absolute',
  top: '0',
}));
