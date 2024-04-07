import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  Skeleton,
  SwipeableDrawer,
  Tabs,
  useMediaQuery,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { HeaderCategoryBox, HeaderTextStyle } from 'components/header/styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import theme from 'theme';
import { MobileContainer } from './styles';
import { ArrowUpward } from '@mui/icons-material';

const drawerBleeding = 50;

const Root = styled('div')(() => ({
  height: '100%',
  backgroundColor: '#D9D9D9',
}));

const StyledBox = styled('div')(() => ({
  backgroundColor: '#D9D9D9',
}));

const Puller = styled('div')(() => ({
  width: 30,
  height: 6,
  backgroundColor: '#D9D9D9',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const MainLayout = ({ window }) => {
  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const navigate = useNavigate();

  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(false);
  const [authSwitch, setAuthSwitch] = useState(true);
  const [openModalAuth, setOpenModalAuth] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleAuthSwitch = (bool) => {
    setAuthSwitch(bool);
  };

  const toggleModalAuth = () => {
    setOpenModalAuth((open) => !open);
  };

  const toCatalog = (name, id) => {
    navigate(`/catalog/${name}/${id}`);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Header
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
        openModalAuth={openModalAuth}
        toggleModalAuth={toggleModalAuth}
      />
      <HeaderCategoryBox>
        <Tabs variant="scrollable" sx={{ alignItems: 'center' }}>
          {categories?.map(({ id, name }) => (
            <HeaderTextStyle key={id} onClick={() => toCatalog('category', id)}>
              {name}
            </HeaderTextStyle>
          ))}
        </Tabs>
      </HeaderCategoryBox>
      <Outlet />
      <Footer
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
        openModalAuth={openModalAuth}
        toggleModalAuth={toggleModalAuth}
      />
    </div>
  );
};

export default MainLayout;
