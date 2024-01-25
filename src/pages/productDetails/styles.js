import styled from '@emotion/styled';
import { Box, Button, IconButton } from '@mui/material';
import theme from 'theme';
import bg_details from 'assets/images/bg_details.jpg';

export const DetailsContainer = styled(Box)(() => ({
  height: 'auto',
  marginTop: '130px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '50px',
  alignContent: 'space-between',
  backgroundImage: `url(${bg_details})`,
  backgroundSize: '100% 100%',
}));

export const LoadingContainer = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const SliderContainer = styled(Box)(() => ({
  width: '600px',
  minHeight: '100vh',
  gap: '50px',
  display: 'flex',
  zIndex: '1000',
  justifyContent: 'space-between',
}));

export const SliderBox = styled(Box)(() => ({
  flexGrow: '1',
  width: '500px',
  height: '500px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  overflow: 'hidden',
  boxSizing: 'content-box',
  outline: '1px solid #000',
}));

export const Slider = styled('img')(() => ({}));

export const SliderBoxSwicther = styled(Box)(() => ({
  width: '100px',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
}));

export const Slide = styled('img')(() => ({
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export const InfoContainer = styled(Box)(() => ({
  width: '600px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '30px',
  padding: '0px 50px',
  boxSizing: 'border-box',
}));

export const TextStyle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '16px',
  fontWeight: '550',
  letterSpacing: '2px',
  color: '#000',
  backgroundColor: theme.palette.secondary.main,
}));

export const TextTitleStyle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '20px',
  fontWeight: '700',
  letterSpacing: '2px',
  color: '#000',
  textTransform: 'uppercase',
}));

export const TextMergeBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

export const ButtonAddCart = styled(Button)(() => ({
  borderRadius: '10px',
  outline: theme.palette.secondary.main,
  fontFamily: theme.fonts.Trebuchet,
  fontWeight: '700',
  letterSpacing: '2px',
  color: '#000',
  textTransform: 'uppercase',
  zIndex: '0',
}));

export const CustomIconButton = styled(IconButton)(() => ({
  backgroundColor: theme.palette.secondary.main,
  transition: '0.6s',
  zIndex: '0',
  '&:hover': {
    transition: '0.6s',
    backgroundColor: 'red',
  },
}));
