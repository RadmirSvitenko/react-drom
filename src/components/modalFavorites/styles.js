import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';

export const FavoritesContainer = styled(Box)(() => ({
  width: '500px',
  flexWrap: 'wrap',
  minWidth: '500px',
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
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  letterSpacing: '2px',
}));

export const Title = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '18px',
  fontWeight: '550',
  letterSpacing: '2px',
}));

export const ContentBox = styled(Box)(() => ({
  width: '100%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export const ProductContainer = styled(Box)(() => ({
  width: '100%',
  height: '120px',
  display: 'flex',
}));

export const ProductImageBox = styled(Box)(({ preview }) => ({
  width: '120px',
  height: '120px',
  backgroundImage: `url(${preview})`,
  backgroundSize: '100% 100%',
  outline: '1px solid #000',
}));

export const ProductInfoBox = styled(Box)(() => ({
  flexGrow: 1,
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '0px 16px',
}));

export const Counter = styled(Box)(() => ({
  margin: '0px 30px',
}));

export const FunctionBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  transition: '0.5s',
}));

export const LoadingBox = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
