import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';
import theme from 'theme';

export const CardContainer = styled(Paper)(() => ({
  width: '250px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  boxShadow: '0px 0px 5px 10px rgba(0, 0, 0, 0.53)',
}));

export const CardImageBox = styled(Box)(({ image }) => ({
  width: '250px',
  height: '250px',
  backgroundImage: `url(${image})`,
  backgroundSize: '100% 100%',
}));

export const CardInfoBox = styled(Box)(() => ({
  width: '250px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  padding: '10px 20px',
}));

export const CardText = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '1px',
  boxSizing: 'border-box',
}));

export const CardButton = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '14px',
  fontWeight: '800',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  padding: '9px 15px',
  backgroundColor: '#000',
  transition: '0.6s',
  textAlign: 'center',
  outline: '0.5px solid #000',
  color: '#fff',
  ':hover': {
    // background: theme.palette.primary.dark,
    backgroundColor: 'red',
    outline: 'none',
    cursor: 'pointer',
    transition: '0.6s',
  },
}));
