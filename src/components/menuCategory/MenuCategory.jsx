import React from 'react';
import {
  Container,
  CustomCategoryBox,
  CustomListBoxIcon,
  CustomSubcategoryBox,
  CustomSwipeableDrawer,
  CustomUl,
  CustomUlSubMenu,
} from './styles';
import { CloseRounded, EastRounded } from '@mui/icons-material';
import { Collapse, IconButton, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import theme from 'theme';

const MenuCategory = ({ open, onClose, visibility, setVisibility }) => {
  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const subcategories =
    useSelector((state) => state.subcategoryReducer.subcategories) || [];

  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const toCatalog = (name, id) => {
    navigate(`/catalog/${name}/${id}`);
    onClose();
  };

  const handleVisibilityCategory = (id, name) => {
    setVisibility({
      bind: id,
      checkedNameCategory: name,
      checkedNameSubcategory: '',
      design: true,
    });
  };

  return (
    <>
      <CustomSwipeableDrawer
        transitionDuration={300}
        anchor={'left'}
        open={open}
        onClose={onClose}
        sx={{
          ...(sm && {
            width: '100%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '100%',
              boxSizing: 'border-box',
            },
          }),
        }}
      >
        <Container>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', right: '0', top: '0' }}
          >
            <CloseRounded />
          </IconButton>
          <CustomUl>
            {categories?.map(({ id, name }) => (
              <React.Fragment key={id}>
                <CustomCategoryBox
                  name={name}
                  checkedNameCategory={visibility.checkedNameCategory}
                  design={visibility.design}
                  onMouseOver={() => handleVisibilityCategory(id, name)}
                  onClick={() => toCatalog('category', id)}
                >
                  {name}
                  {name === visibility.checkedNameCategory && (
                    <CustomListBoxIcon
                      name={name}
                      checkedNameCategory={visibility.checkedNameCategory}
                    >
                      <EastRounded />
                    </CustomListBoxIcon>
                  )}
                </CustomCategoryBox>
              </React.Fragment>
            ))}
          </CustomUl>

          <Collapse
            orientation={sm ? 'vertical' : 'horizontal'}
            timeout={2000}
            in={visibility.bind}
            sx={sm && { display: 'none' }}
          >
            <CustomUlSubMenu design={visibility.design} type="tables">
              {subcategories
                ?.filter(
                  (subcategory) => subcategory.category === visibility.bind
                )
                .map(({ id: subId, name: subName }) => (
                  <CustomSubcategoryBox
                    key={subId}
                    onClick={() => toCatalog('subcategory', subId)}
                    onMouseOver={() =>
                      setVisibility((prevValue) => ({
                        ...prevValue,
                        checkedNameSubcategory: subName,
                      }))
                    }
                    name={subName}
                    subcategory={visibility.checkedNameSubcategory}
                  >
                    {subName}
                  </CustomSubcategoryBox>
                ))}
            </CustomUlSubMenu>
          </Collapse>
        </Container>
      </CustomSwipeableDrawer>
    </>
  );
};

export default MenuCategory;
