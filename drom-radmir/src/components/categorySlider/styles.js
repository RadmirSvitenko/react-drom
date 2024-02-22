import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}));
