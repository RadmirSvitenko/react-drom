import {
  ArrowUp,
  BreadcrumbsBox,
  CatalogBox,
  CatalogContainer,
  CatalogFilterBox,
  FilterButton,
  Link,
  PaginationContainer,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import ProductCatalogCard from 'components/productCatalogCard/ProductCatalogCard';
import { getProducts } from 'reducers/productSlice';
import { TuneRounded } from '@mui/icons-material';
import CatalogFilterDrawer from 'components/catalogFilterDrawer/CatalogFilterDrawer';
import { useTranslation } from 'react-i18next';
import Loading from 'components/loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { toUpPage } from 'globalFunction';

import arrowUp from 'assets/images/ArrowUp.svg';

const Catalog = () => {
  const products = useSelector((state) => state.productReducer.catalog);
  const isLoading = useSelector(
    (state) => state.productReducer.isLoadingProducts
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filter, value } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [visibilityUpButton, setVisibilityUpButton] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: 'Home', value: '/' },
    { name: 'Catalog', value: '/catalog' },
  ]);

  const { t } = useTranslation();

  const handleGetProducts = useCallback(async () => {
    await dispatch(getProducts({ [filter]: value }));
  }, [dispatch, filter, value]);

  const handleChangePage = (e, page) => {
    setCurrentPage(page);
  };

  const handleVisibilitiUpButton = () => {
    const yCoordinate = document
      .getElementById('catalog_container')
      .getBoundingClientRect().top;
    console.log('yCoordinate: ', yCoordinate);

    if (yCoordinate < -200) {
      setVisibilityUpButton(true);
    } else if (yCoordinate > -100) {
      setVisibilityUpButton(false);
    }
  };

  const handleFilterDrawer = () => {
    setFilterDrawer((open) => !open);
  };

  const handleChangeLinks = (link) => () => {
    navigate(link);
  };

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <CatalogContainer
      id={'catalog_container'}
      onMouseMove={handleVisibilitiUpButton}
    >
      <BreadcrumbsBox>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs?.map(({ name, value }) => (
            <Link onClick={handleChangeLinks(value)}>{name}</Link>
          ))}
        </Breadcrumbs>

        <FilterButton variant="contained" onClick={() => handleFilterDrawer()}>
          <TuneRounded />
          {t('filterTitle')}
        </FilterButton>
      </BreadcrumbsBox>

      <CatalogFilterBox>
        <CatalogFilterDrawer
          filterDrawer={filterDrawer}
          isLoading={isLoading}
        />
        <CatalogBox>
          {isLoading || !products
            ? products?.map((product) => (
                <Loading key={product.id} width={270} height={400} />
              ))
            : products?.map((product) => (
                <ProductCatalogCard
                  product={product}
                  id={product.id}
                  key={product.id}
                />
              ))}

          <PaginationContainer spacing={1}>
            <Pagination
              onChange={handleChangePage}
              page={currentPage}
              count={Math.ceil(products.length / 20) || 1}
              color="secondary"
              showFirstButton
              showLastButton
            />
          </PaginationContainer>
        </CatalogBox>
      </CatalogFilterBox>

      <ArrowUp
        visibilityUpButton={visibilityUpButton}
        onClick={() => toUpPage()}
      >
        <img width={'20px'} height={'20px'} src={arrowUp} alt="arrowUp" />
      </ArrowUp>
    </CatalogContainer>
  );
};

export default Catalog;
