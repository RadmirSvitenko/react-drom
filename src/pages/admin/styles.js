import styled from '@emotion/styled';
import { AppBar, Box, Drawer } from '@mui/material';
import theme from 'theme';

const { sm, md, lg, xl } = theme.breakpoints.values;

export const Container = styled(Box)(() => ({
  display: 'flex',
}));

export const CustomDrawer = styled(Drawer)(({ adminDrawer }) => ({
  [sm]: {
    width: '100%',
  },

  [md]: {
    width: '300px',
  },

  [lg]: {
    width: '300px',
  },

  [xl]: {
    width: '300px',
  },

  flexShrink: '0',
  display: adminDrawer ? 'flex' : 'none',
  transition: '1s',

  '& .MuiDrawer-paper': {
    width: '300px',
    boxSizing: 'border-box',
  },
}));

export const CustomDrawerHeader = styled(Box)(() => ({
  [sm]: {
    width: '0%',
  },

  [md]: {
    width: '300px',
  },

  [lg]: {
    width: '300px',
  },

  [xl]: {
    width: '300px',
  },

  height: '70px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const CustomAppBar = styled(AppBar)(({ adminDrawer }) => ({
  [sm]: {
    ...(adminDrawer && {
      width: '0px',
      height: '0px',
    }),
  },

  [md]: {
    width: '300px',
  },

  ...(adminDrawer && {
    width: `calc(100% - 300px)`,
    height: '70px',
    marginLeft: `300px`,
  }),
}));

export const MenuContainer = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '70px',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
  },
}));
