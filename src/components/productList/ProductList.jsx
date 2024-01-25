import React, { useCallback, useEffect } from 'react';
import { ProductListContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import ProductCard from 'components/productCard/ProductCard';
import IsLoading from 'components/isLoading/IsLoading';
import { List, ListItem } from '@mui/material';

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.catalog);
  const isLoading = useSelector((state) => state.productReducer.isLoading);

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(async () => {
    await dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  if (isLoading || !products) {
    <IsLoading />;
  }

  return (
    <ProductListContainer>
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
