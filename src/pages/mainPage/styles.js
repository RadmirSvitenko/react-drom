import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import BackgroundPresentation from 'assets/images/img1_kare.webp';
import theme from 'theme';

export const PresentationContainer = styled(Box)(() => ({
  marginTop: '130px',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `url(${BackgroundPresentation})`,
  backgroundSize: 'cover',
}));

export const Container = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  height: 'auto',
}));

export const SlidersContainer = styled(Box)(() => ({
  width: '100%',
  padding: '70px 0px',
}));

export const CatalogButton = styled(Button)(() => ({
  padding: '5px 25px',
  borderRadius: '10px',
  fontFamily: theme.fonts.Trebuchet,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#fff',
  fontSize: '18px',
  fontWeight: '700',
  backgroundColor: 'red',
  transition: '0.5s',

  '&:hover': {
    backgroundColor: 'red',
  },
}));
