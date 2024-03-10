import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import theme from 'theme';

export const CategoryCardContainer = styled(Box)(() => ({
  width: '250px',
  height: '250px',
}));

export const CategoryTitle = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '1.5px',
  margin: '15px 0px',
}));
