import styled from '@emotion/styled';
import { Box, Link } from '@mui/material';
import { green } from '@mui/material/colors';
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
  borderTop: '1px solid #A49989',

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
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
  padding: '10px 0px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
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

export const TextMessenger = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '1px',
  cursor: 'pointer',
  margin: '8px 0px',
  '&:hover': {
    color: '#FAFAFA',
  },
}));

export const BoxMessanger = styled('a')(({ anim }) => ({
  textDecoration: 'none',
  color: '#000',
  backgroundColor: '#F5F3EE',
  width: '150px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: '10px',
  letterSpacing: '1px',
  '&:hover': {
    backgroundColor:
      anim === 'whatsapp'
        ? 'green'
        : anim === 'instagram'
        ? '#933FAF'
        : 'transparent',
    opacity: '1',
    transition: '0.5s',
    color: '#FAFAFA',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      gap: '0px',
    },
  },
}));

export const ButtonMessenger = styled('a')(() => ({
  color: '#000',
  fontWeight: '800',
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '16px',
  letterSpacing: '1px',
  cursor: 'pointer',
  transition: '0.5s',
}));
