import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import theme from 'theme';

export const CatalogContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  flexWrap: 'wrap',
  backgroundColor: '#FAFAFA',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '0px 80px',

  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

export const LoadingBox = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CatalogBox = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '40px',
}));

export const CatalogFilterBar = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '50px 0px',
}));

export const CatalogFilterBox = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  flexWrap: 'nowrap',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    margin: '50px 0px',
  },
}));

export const BreadcrumbsBox = styled(Box)(() => ({
  padding: '20px 0px 20px 0px',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '20px',
  },
}));

export const Link = styled(Typography)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '1px',

  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));

export const PaginationContainer = styled(Stack)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '30px 0px',
}));

export const FilterButton = styled(Button)(() => ({
  backgroundColor: '#B6A99E',
  fontFamily: theme.typography.fontFamily[1],
  letterSpacing: '1px',
  fontSize: '14px',
  fontWeight: '500',
  color: '#000',

  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
    backgroundColor: '#B6A99E',
  },
}));

export const ArrowUp = styled(Box)(({ visibilityUpButton }) => ({
  display: visibilityUpButton ? 'flex' : 'none',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FAFAFA',
  transition: '0.5s',
  position: 'fixed',
  color: '#FAFAFA',
  bottom: '0',
  right: '0',
  margin: '50px',
  padding: '15px',
  borderRadius: '50%',
  outline: '1px solid #5D5146',

  '&:hover': {
    backgroundColor: '#5D5146',
    outline: 'none',
    transition: '0.5s',
    cursor: 'pointer',
    padding: '15px',
  },
}));
