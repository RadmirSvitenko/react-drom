import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';
import theme from 'theme';

export const CardContainer = styled(Paper)(() => ({
  width: '350px',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#FAFAFA',
  outline: '1px solid #000',
  boxShadow: '0px 5px 6px 0px rgba(34, 60, 80, 0.32)',

  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '300px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '130px',
    height: '250px',
  },
}));

export const CardImageBox = styled(Box)(({ image }) => ({
  width: '100%',
  height: '300px',
  backgroundImage: `url(${image})`,
  position: 'relative',
  backgroundSize: '100% 100%',
  borderRadius: '10px',
}));

export const ProductClassBox = styled(Box)(() => ({
  backgroundColor: '#F5F3EE',
  padding: '5px',
  borderRadius: '5px',
  color: '#000',
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontWeight: '500',
  position: 'absolute',
  margin: '10px',
  top: '0',
  left: '0',
}));

export const CardInfoBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  backgroundColor: '#F5F3EE',
  color: '#000',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '10px 0px 10px 5px',
  gap: '20px',
  borderRadius: '10px',
}));

export const CardText = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  letterSpacing: '1px',
  boxSizing: 'border-box',
  width: '100px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

export const CardButton = styled(Box)(({ viasableButton }) => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '800',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  backgroundColor: '#F5F5F5',
  textAlign: 'center',
  color: '#000',
  position: 'absolute',
  bottom: '0',
  borderRadius: '10px',
  width: '100%',
  opacity: viasableButton ? '1' : '0',
  padding: viasableButton ? '9px 15px' : '0px',
  transition: '0.5s',

  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '6px',
  },

  '&:hover': {
    backgroundColor: '#5D5146',
    color: '#F5F5F5',
    outline: '1px solid #F5F5F5',
    cursor: 'pointer',
    transition: '0.6s',
  },
}));
