import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import theme from 'theme';

export const CustomTitle = styled(Typography)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '20px',
  padding: '5px',
  color: '#000',
  textTransform: 'uppercase',
  letterSpacing: '1px',
}));
