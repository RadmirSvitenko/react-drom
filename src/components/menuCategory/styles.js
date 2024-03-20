import styled from '@emotion/styled';
import { Box, SwipeableDrawer } from '@mui/material';
import theme from 'theme';

export const MenuCategoryContainer = styled(Box)(() => ({
  minWidth: '300px',
  height: '100vh',
  background: theme.palette.primary.second,
  transition: '0.4s',
}));

export const CustomSwipeableDrawer = styled(SwipeableDrawer)(() => ({
  width: 'auto',
  minWidth: '300px',
  transition: '0.5s easy-out',
}));

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
  padding: '20px 0px',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
  },
}));

export const CustomUl = styled(Box)(() => ({
  listStyleType: 'none',
  padding: '20px',
  lineHeight: '40px',
  transition: '0.6s',
  display: 'block',
}));

export const CustomCategoryBox = styled(Box)(
  ({ name, checkedNameCategory, checkedNameSubcategory }) => ({
    fontFamily: theme.typography.fontFamily[1],
    color: '#000',
    letterSpacing: '1.5px',
    fontSize: '14px',
    fontWeight: '500',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    padding: '5px 15px',
    transition: '0.6s',
    borderRadius: '15px',
    background:
      name === checkedNameCategory
        ? theme.palette.secondary.main
        : 'transparent',
    '&:hover': {
      transition: '0.6s',
    },
  })
);

export const CustomSubcategoryBox = styled(Box)(({ name, subcategory }) => ({
  fontFamily: theme.typography.fontFamily[1],
  color: '#000',
  letterSpacing: '1.5px',
  fontSize: '14px',
  fontWeight: '500',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  padding: '5px 15px',
  transition: '0.6s',
  borderRadius: '15px',
  background:
    name === subcategory ? theme.palette.secondary.main : 'transparent',
  '&:hover': {
    transition: '0.6s',
  },
}));

export const CustomListImageBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100px',
}));

export const CustomListBoxIcon = styled(Box)(
  ({ name, checkedNameCategory }) => ({
    alignItems: 'center',
    paddingLeft: '20px',
    transition: '0.5s',
    display: name === checkedNameCategory ? 'flex' : 'none',
  })
);

export const CustomUlSubMenu = styled(Box)(({ design }) => ({
  lineHeight: '40px',
  padding: '20px',
  transition: '1s',
  width: design ? 'auto' : '0px',
  whiteSpace: 'nowrap',
}));
