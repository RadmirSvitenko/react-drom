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
  InventoryRounded,
  ListRounded,
  MenuRounded,
  ViewQuiltRounded,
} from '@mui/icons-material';
import AdminProductList from 'components/adminProductList/AdminProductList';
import AdminAddProductForm from 'components/adminAddProductForm/AdminAddProductForm';

import theme from 'theme';
import AdminCategory from 'components/adminCategory/AdminCategory';
import AdminSubcategory from 'components/adminSubcategory/AdminSubcategory';
import AdminColors from 'components/adminColors/AdminColors';
import AdminImages from 'components/adminImages/AdminImages';
import AdminStatistics from 'components/adminStatistics/AdminStatistics';

const Admin = () => {
  const { sm } = theme.breakpoints.values;

  const adminList = [
    { name: 'редактировать', icon: <ViewQuiltRounded /> },
    { name: 'cоздать товар', icon: <AddRounded /> },
    { name: 'управление категориями', icon: <InventoryRounded /> },
    { name: 'управление подкатегориями', icon: <InventoryRounded /> },
    { name: 'управление цветами', icon: <InventoryRounded /> },
    { name: 'управление изображениями', icon: <InventoryRounded /> },
  ];

  const [adminDrawer, setAdminDrawer] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);

  console.log('adminDrawer: ', adminDrawer);

  const handleChangeForm = (id) => {
    setCurrentMenu(id);
    setAdminDrawer(false);
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={sm && { display: 'none' }}
          >
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
          <AdminAddProductForm />
        ) : currentMenu === 1 ? (
          <AdminAddProductForm />
        ) : currentMenu === 2 ? (
          <AdminCategory />
        ) : currentMenu === 3 ? (
          <AdminSubcategory />
        ) : currentMenu === 4 ? (
          <AdminColors />
        ) : currentMenu === 5 ? (
          <AdminImages />
        ) : (
          <AdminAddProductForm />
        )}
      </MenuContainer>
    </Container>
  );
};

export default Admin;
