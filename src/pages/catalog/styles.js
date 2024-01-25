import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import bgCatalog from 'assets/images/bg_catalog.jpg';
import theme from 'theme';

export const CatalogContainer = styled(Box)(() => ({
  marginTop: '80px',
  width: '100%',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexDirection: 'column',
  backgroundImage: `url(${bgCatalog})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat',
  padding: '50px',
  boxSizing: 'border-box',
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
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '50px',
}));
export const CatalogFilterBar = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '50px 0px',
}));
export const PaginationContainer = styled(Stack)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CatalogSearch = styled(TextField)(() => ({
  width: '500px',
  margin: '0px 20px',
  background: '#fff',
  fontSize: '12px',
  borderRadius: '25px',
  transition: '0.5s',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    padding: '0px 20px',
    borderColor: theme.palette.secondary.main,
    fontFamily: theme.fonts.Trebuchet,
    letterSpacing: '1.5px',

    '& fieldset': {
      borderRadius: '25px',
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
    },
    '&:hover fieldset': {
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
      boxShadow: '0px 8px 12px -7px rgba(34, 60, 80, 0.38)',
    },
  },
}));

export const CatalogSearchForm = styled('form')(() => ({}));

export const FilterButton = styled(Button)(() => ({
  borderRadius: '10px',
  padding: '10px 20px',
  fontFamily: theme.fonts.Trebuchet,
  letterSpacing: '1px',
  fontSize: '14px',
  fontWeight: '500',
}));

export const CatalogProductCounter = styled(Typography)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  letterSpacing: '1px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: theme.palette.secondary.main,
}));
