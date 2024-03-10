import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import theme from 'theme';

import mobileImage from 'assets/images/mobileMainImage.png';

export const Slide = styled(Box)(({ slide }) => ({
  backgroundImage: `url(${slide})`,
  display: 'flex',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.down('xl')]: {
    width: '80%',
    height: '600px',
  },

  [theme.breakpoints.down('lg')]: {
    margin: '0px 20px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '0px',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const MobileBoxImage = styled(Box)(() => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: 'none',
  width: '100%',
  height: '500px',
}));

export const MobileImage = styled(Box)(() => ({
  width: '300px',
  height: '300px',
  backgroundImage: `url(${mobileImage})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
}));

export const Container = styled(Box)(() => ({}));

export const SliderContainer = styled(Box)(() => ({
  width: '100%',
  height: '80vh',
}));

export const CategoryContainer = styled(Box)(() => ({
  padding: '0px 150px 100px 150px',
  display: 'grid',
  gap: '20px',
  backgroundColor: '#F5F3EE',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const CategoryContainerTest = styled(Box)(() => ({
  padding: '0px',
  display: 'grid',
  gap: '20px',
  backgroundColor: '#F5F3EE',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
export const ImagesGrid = styled(Box)(() => ({
  display: 'grid',
  gap: '20px',

  [theme.breakpoints.down('md')]: {
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '100%',
    gap: '20px',
  },
}));

export const ImageAd = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  '&:hover': {
    transition: '0.5s',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
  },

  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
    zIndex: '0',
  },
  '&:hover > img': {
    transform: 'scale(1.1)',
    transition: '0.5s',
  },

  '& > div': {
    width: '100%',
    height: '100%',
    opacity: '0',
    outline: '1px solid #000',
    position: 'absolute',
    zIndex: '1',
    backgroundColor: '#000',
    transition: '0.5s',
    padding: '0px',
  },

  '&:hover > div': {
    opacity: '0.5',
    transition: '0.5s',
    padding: '20px',
  },

  '& > span': {
    position: 'absolute',
    zIndex: '2',
    fontFamily: theme.typography.fontFamily[1],
    textTransform: 'uppercase',
    fontWeight: '650',
    letterSpacing: '1px',
    fontSize: '16px',
    transition: '0.5s',
    right: '0',
    bottom: '0',
    opacity: '0',
    color: '#fff',
  },
  '&:hover > span': {
    cursor: 'pointer',
    transition: '0.5s',
    padding: '20px',
    opacity: '1',
  },
}));

export const Text = styled('span')(() => ({}));

export const CatalogButton = styled(Button)(() => ({
  padding: '5px 25px',
  borderRadius: '10px',
  fontFamily: theme.typography.fontFamily[1],
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

export const TitleBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '20px 60px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const SlideCategory = styled(Box)(({ image }) => ({
  width: '320px',
  height: '320px',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  padding: '0px',
  margin: '0px',

  [theme.breakpoints.down('sm')]: {
    height: '200px',
    width: '200px',
  },
}));

export const SlideCategoryDetails = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  opacity: '0',
  transition: '0.5s',
  position: 'absolute',

  '&:hover': {
    opacity: '0.6',
    color: '#FFF',
    margin: '0',
    padding: '0',
    transition: '0.5s',
    cursor: 'pointer',
  },
}));
