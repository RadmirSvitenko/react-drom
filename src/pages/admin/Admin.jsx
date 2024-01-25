import React, { useState } from 'react';
import {
  Container,
  CustomAppBar,
  CustomDrawer,
  CustomDrawerHeader,
  MenuContainer,
} from './styles';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  AddRounded,
  ChevronLeftRounded,
  ListRounded,
  MenuRounded,
  ScheduleRounded,
  TrendingUpRounded,
} from '@mui/icons-material';
import AdminStatistics from 'components/adminStatistics/AdminStatistics';
import AdminProductList from 'components/adminProductList/AdminProductList';
import AdminAddProductForm from 'components/adminAddProductForm/AdminAddProductForm';

const Admin = () => {
  const adminList = [
    { name: 'cтатистика', icon: <TrendingUpRounded /> },
    { name: 'cписок товаров', icon: <ListRounded /> },
    { name: 'cоздать товар', icon: <AddRounded /> },
    { name: 'недавние действия', icon: <ScheduleRounded /> },
  ];

  const [adminDrawer, setAdminDrawer] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);

  const handleChangeForm = (id) => {
    setCurrentMenu(id);
  };

  return (
    <Container>
      <CustomAppBar adminDrawer={adminDrawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="adminDrawer"
            onClick={() => setAdminDrawer(true)}
            edge="start"
            sx={adminDrawer ? { display: 'none' } : { display: 'flex' }}
          >
            <MenuRounded />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Панель администратора
          </Typography>
        </Toolbar>
      </CustomAppBar>

      <CustomDrawer
        adminDrawer={adminDrawer}
        open={adminDrawer}
        variant="persistent"
        anchor="left"
      >
        <CustomDrawerHeader>
          <IconButton onClick={() => setAdminDrawer(false)}>
            <ChevronLeftRounded fontSize="large" />
          </IconButton>
        </CustomDrawerHeader>
        <Divider />
        <List>
          {adminList?.map(({ name, icon }, index) => (
            <ListItem key={name} disablePadding>
              <ListItemButton onClick={() => handleChangeForm(index)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </ListItemButton>
              <Divider />
            </ListItem>
          ))}
        </List>
      </CustomDrawer>

      <MenuContainer>
        {currentMenu === 0 ? (
          <AdminStatistics />
        ) : currentMenu === 1 ? (
          <AdminProductList />
        ) : currentMenu === 2 ? (
          <AdminAddProductForm />
        ) : (
          <AdminStatistics />
        )}
      </MenuContainer>
    </Container>
  );
};

export default Admin;
