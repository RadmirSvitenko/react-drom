import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const Loading = ({ width, height }) => {
  return (
    <Stack spacing={20}>
      <Skeleton
        animation="wave"
        variant="rounded"
        width={width}
        height={height}
        sx={{ bgcolor: 'grey.800', opacity: '0.9' }}
      />
    </Stack>
  );
};

export default Loading;
