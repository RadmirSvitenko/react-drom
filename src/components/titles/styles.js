import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';

export const TitleBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  fontFamily: theme.fonts.Trebuchet,
  textAlign: 'center',
  fontSize: '30px',
  padding: '15px 0px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: '700',
}));
