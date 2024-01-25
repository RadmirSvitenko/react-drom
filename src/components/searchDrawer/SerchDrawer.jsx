import React, { useCallback, useEffect, useState } from 'react';
import { Dialog, IconButton, Slide } from '@mui/material';
import {
  CustomSearchAppBar,
  CustomSearchContainer,
  CustomSearchInput,
  CustomSearchInputBox,
  CustomSearchPopularProductBox,
  CustomSearchToolbar,
} from './styles';
import { Close, Search } from '@mui/icons-material';
import logotype from 'assets/images/Drom-logo.png';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import ProductPopular from 'components/productPopular/ProductPopular';

const SerchDrawer = ({ open, onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  console.log('searchValue: ', searchValue);

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(async () => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  const handleSearchSubmit = () => {};

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClose = () => {
    setSearchValue('');
    onClose();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      transitionDuration={500}
      TransitionComponent={Slide}
    >
      <CustomSearchContainer>
        <CustomSearchAppBar>
          <CustomSearchToolbar>
            <img width={'140px'} src={logotype} alt="Drom" />
            <CustomSearchInputBox
              onSubmit={handleSearchSubmit}
              onChange={handleSearchChange}
            >
              <CustomSearchInput
                InputProps={{
                  startAdornment: <Search />,
                }}
                placeholder={t('headerSearchLabel')}
              />

              <IconButton onClick={() => handleSearchClose()}>
                <Close />
              </IconButton>

              <IconButton type="submit">
                <Search />
              </IconButton>
            </CustomSearchInputBox>
          </CustomSearchToolbar>
        </CustomSearchAppBar>

        <CustomSearchPopularProductBox>
          <ProductPopular onClose={onClose} />
        </CustomSearchPopularProductBox>
      </CustomSearchContainer>
    </Dialog>
  );
};

export default SerchDrawer;
