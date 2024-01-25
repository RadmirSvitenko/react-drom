import {
  CatalogBox,
  CatalogContainer,
  CatalogFilterBar,
  CatalogProductCounter,
  CatalogSearch,
  CatalogSearchForm,
  FilterButton,
  LoadingBox,
  PaginationContainer,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import ProductCatalogCard from 'components/productCatalogCard/ProductCatalogCard';
import IsLoading from 'components/isLoading/IsLoading';
import { getProducts } from 'reducers/productSlice';
import { Close, Search, TuneRounded } from '@mui/icons-material';
import CatalogFilterDrawer from 'components/catalogFilterDrawer/CatalogFilterDrawer';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const products = useSelector((state) => state.productReducer.catalog);
  const isLoading = useSelector((state) => state.productReducer.isLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filterDrawer, setFilterDrawer] = useState(false);
  console.log('filterDrawer: ', filterDrawer);

  // const sort = [t('filterTitleAscending'), t('filterTitleDescending')];

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSearchSubmit = () => {};

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClose = () => {
    setSearchValue('');
  };

  const handleGetProducts = useCallback(async () => {
    await dispatch(getProducts());
    toUpPage();
  }, [dispatch]);

  const handleChangePage = (e, page) => {
    setCurrentPage(page);
  };

  const handleFilterDrawer = () => {
    setFilterDrawer((open) => !open);
  };

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  if (isLoading || !products) {
    return (
      <LoadingBox>
        <IsLoading />;
      </LoadingBox>
    );
  }

  return (
    <CatalogContainer>
      <CatalogFilterBar>
        <FilterButton variant="contained" onClick={() => handleFilterDrawer()}>
          {t('filterTitle')}
          <TuneRounded />
        </FilterButton>

        <CatalogSearchForm
        // onSubmit={handleSearchSubmit}
        >
          <CatalogSearch
            value={searchValue}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <Box sx={{ display: 'flex' }}>
                  <IconButton type="submit">
                    <Search />
                  </IconButton>
                  <IconButton onClick={() => handleSearchClose()}>
                    <Close />
                  </IconButton>
                </Box>
              ),
            }}
            placeholder={t('headerSearchLabel')}
          />
        </CatalogSearchForm>

        <CatalogProductCounter>
          Товаров в каталоге: {products.length}
        </CatalogProductCounter>
      </CatalogFilterBar>

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <CatalogFilterDrawer filterDrawer={filterDrawer} />
        <CatalogBox>
          {products?.map((product) => (
            <ProductCatalogCard
              product={product}
              isLoading={isLoading}
              key={product.id}
            />
          ))}

          <PaginationContainer spacing={10}>
            <Pagination
              onChange={handleChangePage}
              page={currentPage}
              count={Math.floor(products.length / 20) || 10}
              color="secondary"
              showFirstButton
              showLastButton
            />
          </PaginationContainer>
        </CatalogBox>
      </Box>
    </CatalogContainer>
  );
};

export default Catalog;
