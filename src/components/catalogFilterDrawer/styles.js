import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import theme from 'theme';

export const FiltersContainer = styled(Box)(({ filterDrawer }) => ({
  minWidth: '300px',
  borderRadius: '10px',
  height: '230px',
  display: filterDrawer ? 'block' : 'none',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const FiltersTextStyle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontWeight: '500',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
}));

export const ButtonReset = styled(Button)(() => ({
  display: 'flex',
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontWeight: '600',
  color: '#000',
  fontSize: '12px',
  transition: '0.5s',

  '&:hover': {
    textDecoration: 'underline',
    transition: '0.5s',
    backgroundColor: '#B6A99E',
  },
}));

export const SliderBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
}));

export const FiltersSelectedButton = styled(Button)(() => ({
  color: '#000',
}));
