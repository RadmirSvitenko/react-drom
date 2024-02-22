import styled from '@emotion/styled';
import { Dialog } from '@mui/material';
import theme from 'theme';

export const CustomDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    background: 'transparent',
    backdropFilter: 'blur(5px)',
    backgroundColor: '#F5F3EE',
    boxShadow: 'inset 0px 0px 25px 15px #4C4239',
    borderRadius: '20px',
    outline: '3px solid #939393',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
}));
