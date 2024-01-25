import styled from '@emotion/styled';
import { AppBar, Box, Drawer } from '@mui/material';

export const Container = styled(Box)(() => ({
  display: 'flex',
}));

export const CustomDrawer = styled(Drawer)(({ adminDrawer }) => ({
  width: '300px',
  flexShrink: '0',
  display: adminDrawer ? 'flex' : 'none',
  transition: '1s',

  '& .MuiDrawer-paper': {
    width: '300px',
    boxSizing: 'border-box',
  },
}));

export const CustomDrawerHeader = styled(Box)(() => ({
  width: '300px',
  height: '70px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const CustomAppBar = styled(AppBar)(({ adminDrawer }) => ({
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
}));
