import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import theme from 'theme';

export const Container = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 70px',
  flexWrap: 'wrap',
  margin: '20px 0px',

  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    padding: '0px 70px',
  },
}));

export const DeleteAllBox = styled(Box)(() => ({
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DeleteAllButton = styled('p')(() => ({
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  letterSpacing: '1px',
  transition: '0.5s',

  '&:hover': {
    textDecoration: 'underline',
    transition: '0.5s',
    cursor: 'pointer',
  },
}));

export const InfoContainer = styled(Box)(() => ({
  width: '70%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
    flexWrap: 'wrap',
    height: 'auto',
  },

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    justifyContent: 'center',
  },
}));

export const ProductsContainer = styled(Box)(() => ({
  width: '700px',
  gap: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '500px',
  overflowY: 'scroll',

  [theme.breakpoints.down('lg')]: {
    width: 'auto',
    // alignItems: 'stretch',
    overflowY: 'scroll',
  },

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    alignItems: 'center',
    overflowY: 'scroll',
  },
}));

export const ProductBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  gap: '30px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    outline: '1px solid #000',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    outline: '1px solid #000',
  },
}));

export const Image = styled(Box)(({ image }) => ({
  width: '160px',
  height: '160px',
  backgroundImage: `url(${image})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
}));

export const InfoBox = styled(Box)(() => ({
  height: '160px',
  display: 'flex',
  paddingRight: '40px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRight: '1px solid #000',

  [theme.breakpoints.down('lg')]: {
    width: 'auto',
    flexGrow: '1',
    border: 'none',
  },

  [theme.breakpoints.down('md')]: {
    width: 'auto',
    height: 'auto',
    outline: '1px solid #000',
  },
}));

export const PriceBox = styled(Box)(() => ({
  width: '150px',
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}));

export const Text = styled(Typography)(() => ({
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  letterSpacing: '1px',
}));

export const Form = styled('form')(() => ({
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Input = styled('input')(() => ({
  padding: '20px',
  borderRadius: '10px',
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  letterSpacing: '1px',
}));

export const OrderButton = styled(Button)(() => ({
  backgroundColor: '#5D5146',
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#FAFAFA',

  '&:hover': {
    backgroundColor: '#5D5146',
    color: '#FAFAFA',
    outline: '1px solid #FAFAFA',
  },
}));

export const OrderContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  [theme.breakpoints.down('lg')]: {
    justifyContent: 'flex-start',
    gap: '50px',
  },

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    alignItems: 'center',
  },
}));

export const ErrorMessage = styled('span')(() => ({
  color: 'red',
  letterSpacing: '1px',
  fontSize: '14px',
  textAlign: 'center',
}));

export const ErrorMessageBox = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflowWrap: 'break-word',
  flexWrap: 'wrap',
}));
