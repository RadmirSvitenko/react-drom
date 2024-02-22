import styled from '@emotion/styled';
import { Box, Paper, Typography } from '@mui/material';
import theme from 'theme';

export const CardContainer = styled(Paper)(() => ({
  width: '220px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '5px',
  backgroundColor: '#E1EBF6',
  boxShadow: '0px 5px 6px 0px rgba(34, 60, 80, 0.32)',
}));

export const CardImageBox = styled(Box)(({ image }) => ({
  width: '220px',
  height: '360px',
  backgroundImage: `url(${image})`,
  backgroundSize: '100% 100%',
}));

export const CardInfoBox = styled(Box)(() => ({
  width: '100%',
  height: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  padding: '10px 0px 10px 5px',
}));

export const CardText = styled(Typography)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  letterSpacing: '1px',
  boxSizing: 'border-box',
}));

export const CardButton = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
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
