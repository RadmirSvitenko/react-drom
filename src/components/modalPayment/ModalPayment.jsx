import { Box, Zoom } from '@mui/material';
import React from 'react';
import { CustomDialog, CustomText } from './styles';

const ModalPayment = ({ open, onClose, message }) => {
  return (
    <CustomDialog
      transitionDuration={300}
      open={open}
      onClose={onClose}
      TransitionComponent={Zoom}
      keepMounted
    >
      <Box
        sx={{
          width: '100%',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText>{message.success}</CustomText>
        <CustomText>{message.details}</CustomText>
        <span></span>
      </Box>
    </CustomDialog>
  );
};

export default ModalPayment;
