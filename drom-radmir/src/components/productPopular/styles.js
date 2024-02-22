import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';

export const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  backgroundColor: '#FAFAFA',
  flexDirection: 'center',
  justifyContent: 'center',
}));

export const TitleBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '50px 60px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
