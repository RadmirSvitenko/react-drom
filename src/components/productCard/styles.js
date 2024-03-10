import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import theme from 'theme';

export const ProductCardContainer = styled(Box)(() => ({
  width: '240px',
  height: '240px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  [theme.breakpoints.down('sm')]: {
    height: '200px',
    width: '200px',
  },
}));

export const ProductCardDetails = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  zIndex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '0',
  transition: '0.5s',
  '&:hover': {
    opacity: '0.6',
    color: '#FFF',
    fontWeight: '600',
    transition: '0.5s',
    cursor: 'pointer',
  },
}));

export const ProductCardImageBox = styled(Box)(({ image }) => ({
  width: '240px',
  height: '240px',
  position: 'relative',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '200px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '150px',
    height: '150px',
  },
}));

export const ProductCardInfoBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '250px',
  flexWrap: 'wrap',
}));

export const ProductCardTitleText = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '1px',
  margin: '15px 0px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ProductCardText = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '1px',
}));

export const ProductCardButton = styled(Button)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '1px',
  borderRadius: '25px',
  padding: '9px 15px',
  transition: '0.6s',
  outline: '0.5px solid #000',
  color: '#000',
  ':hover': {
    background: theme.palette.primary.dark,
    outline: 'none',
    transition: '0.6s',
  },
}));
