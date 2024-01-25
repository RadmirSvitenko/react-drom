import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';

export const CartContainer = styled(Box)(() => ({
  width: '500px',
  flexWrap: 'wrap',
  minWidth: '500px',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
}));

export const TitleBox = styled(Box)(() => ({
  width: '100%',
  height: '80px',
  padding: '0px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '18px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}));

export const Title = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: '18px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}));

export const ContentBox = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ProductContainer = styled(Box)(() => ({
  width: '100%',
  height: '120px',
  display: 'flex',
  outline: `1px solid ${theme.palette.secondary.main}`,
}));

export const ProductImageBox = styled(Box)(({ preview }) => ({
  width: '120px',
  height: '120px',
  backgroundImage: `url(${preview})`,
  backgroundSize: '100% 100%',
}));

export const ProductInfoBox = styled(Box)(() => ({
  flexGrow: 1,
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

export const ProductFunctionBox = styled(Box)(() => ({
  height: '120px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));
