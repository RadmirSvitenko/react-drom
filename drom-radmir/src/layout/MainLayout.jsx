import { Box } from '@mui/material';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [authSwitch, setAuthSwitch] = useState(true);
  const [openModalAuth, setOpenModalAuth] = useState(false);

  const toggleAuthSwitch = (bool) => {
    setAuthSwitch(bool);
  };

  const toggleModalAuth = () => {
    setOpenModalAuth((open) => !open);
  };
  return (
    <>
      <Header
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
        openModalAuth={openModalAuth}
        toggleModalAuth={toggleModalAuth}
      />
      <Outlet />
      <Footer
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
        openModalAuth={openModalAuth}
        toggleModalAuth={toggleModalAuth}
      />
    </>
  );
};

export default MainLayout;
