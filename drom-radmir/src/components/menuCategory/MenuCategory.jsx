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
import { EastRounded } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getProducts } from 'reducers/productSlice';

const MenuCategory = ({ open, onClose, visibility, setVisibility }) => {
  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const subcategories =
    useSelector((state) => state.subcategoryReducer.subcategories) || [];

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
        transitionDuration={700}
        anchor={'left'}
        open={open}
        onClose={onClose}
      >
        <Container>
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
            orientation="horizontal"
            timeout={2000}
            in={visibility.bind}
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
