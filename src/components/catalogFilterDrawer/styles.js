import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';

export const FiltersContainer = styled(Box)(({ filterDrawer }) => ({
  width: '300px',
  borderRadius: '10px',
  height: '230px',
  display: filterDrawer ? 'block' : 'none',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const FiltersTextStyle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  letterSpacing: '1px',
  fontWeight: '500',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  padding: '0px 10px',
}));

export const SliderBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
}));
