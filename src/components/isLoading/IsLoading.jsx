import React from 'react';
import { IsLoadingContainer } from './styles';
import { CircularProgress } from '@mui/material';

const IsLoading = () => {
  return <CircularProgress size={50} sx={{ color: 'red' }} />;
};

export default IsLoading;
