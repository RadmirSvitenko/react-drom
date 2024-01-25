import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import theme from 'theme';

export const ProductCardContainer = styled(Box)(() => ({
  width: '250px',
  height: 'auto',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
}));

export const ProductCardImageBox = styled(Box)(() => ({
  width: '250px',
  height: '250px',
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
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '1px',
  margin: '15px 0px',
}));

export const ProductCardText = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '1px',
}));

export const ProductCardButton = styled(Button)(() => ({
  fontFamily: theme.fonts.Trebuchet,
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
