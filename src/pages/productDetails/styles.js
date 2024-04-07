import styled from '@emotion/styled';
import { Box, Button, IconButton, Typography } from '@mui/material';
import theme from 'theme';

export const CardContainer = styled(Box)(() => ({
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignContent: 'space-between',
}));

export const DetailsContainer = styled(Box)(() => ({
  display: 'flex',
}));

export const LoadingContainer = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const SliderContainer = styled(Box)(() => ({
  gap: '50px',
  display: 'flex',
  zIndex: '500',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
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
  minWidth: '100px',
  display: 'flex',
  height: '500px',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'flex-start',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    height: 'auto',
  },
}));

export const Slide = styled('img')(() => ({
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  transition: '0.6s',
}));

export const InfoContainer = styled(Box)(() => ({
  height: '500px',
  maxHeight: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

export const DescriptionContainer = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  padding: '50px 200px',
  borderTop: '1px solid gray',
  backgroundColor: '#F5F3EE',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontWeight: '500',
  lineHeight: '30px',

  [theme.breakpoints.down('md')]: {
    padding: '50px 100px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '20px',
  },
}));

export const InfoBox = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: '30px',
  position: 'relative',
  padding: '20px 50px',
  boxSizing: 'border-box',

  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
  },
}));

export const TextStyle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '16px',
  fontWeight: '550',
  letterSpacing: '2px',
  color: '#000',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    width: '100%',
  },
}));

export const TextTitleStyle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '20px',
  fontWeight: '700',
  letterSpacing: '2px',
  color: '#000',
  textTransform: 'uppercase',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const TextMergeBox = styled(Box)(() => ({
  width: '100%',
  justifyContent: 'flex-start',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  borderRadius: '5px',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    width: 'auto',
  },
}));

export const ButtonAddCart = styled(Button)(() => ({
  backgroundColor: '#5D5146',
  fontFamily: theme.typography.fontFamily[1],
  color: '#FAFAFA',
  zIndex: '0',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: '#5D5146',
  },
}));

export const CustomIconButton = styled(IconButton)(() => ({
  transition: '0.6s',
  zIndex: '0',
  '&:hover': {
    transition: '0.6s',
    borderRadius: '5px',
  },
}));

export const ColorBox = styled(Box)(({ image }) => ({
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${image})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repet',
  transition: '0.6s',
  borderRadius: '5px',
  filter: 'blur(4)',
  boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
}));

export const BreadcrumbsBox = styled(Box)(() => ({
  padding: '20px 0px 20px 80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ColorMessageBox = styled(Box)(() => ({
  width: '100%',
  margin: '5px 0px',
  padding: '5px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.typography.fontFamily[0],
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '1px',
  transition: '0.6s',
  borderRadius: '5px',
  blur: '5px',
  opacity: '0.8',
}));

export const Link = styled(Typography)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '1px',

  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));
