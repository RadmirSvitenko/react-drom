import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';

export const FooterContainer = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  minHeight: '300px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  background: '#FAFAFA',
  padding: '30px 0px',

  [theme.breakpoints.down('md')]: {
    gap: '100px',
  },

  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '50px',
    alignItems: 'center',
  },
}));

export const FooterContentBox = styled(Box)(() => ({
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    alignItems: 'center',
  },
}));

export const FooterContentTitle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  marginBottom: '30px',
}));

export const FooterIconBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '50px',
  justifyContent: 'space-between',
  padding: '10px 0px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    gap: '50px',
  },
}));

export const FooterContentText = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '1px',
  cursor: 'pointer',
  margin: '8px 0px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
