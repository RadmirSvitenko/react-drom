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
    <React.Fragment>
      <Header
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
        openModalAuth={openModalAuth}
        toggleModalAuth={toggleModalAuth}
      />
      <HeaderCategoryBox>
        <Tabs centered variant="scrollable" sx={{ alignItems: 'center' }}>
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

      {sm && (
        <Root>
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                height: `calc(25% - ${drawerBleeding}px)`,
                overflow: 'visible',
              },
            }}
          />

          <SwipeableDrawer
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              background: 'transparent',
            }}
          >
            <StyledBox
              sx={{
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                right: 0,
                left: 0,
                borderRadius: '15px 15px 0px 0px',
              }}
            >
              <Puller />
            </StyledBox>

            <MobileContainer>
              <Box
                display={'flex'}
                width={'100%'}
                justifyContent={'center'}
                position={'absolute'}
                top={'0'}
                sx={{
                  transform: 'translateX(-50%, -50%)',
                  right: '0%',
                  left: '0%',
                }}
              >
                <ArrowUpward />
              </Box>
              dsadas
            </MobileContainer>

            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </StyledBox>
          </SwipeableDrawer>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              position: 'fixed',
              bottom: '0',
              backgroundColor: '#D9D9D9',
              borderRadius: '20px 20px 0px 0px',
            }}
          >
            <ArrowUpward />
          </div>
        </Root>
      )}
    </React.Fragment>
  );
};

export default MainLayout;
