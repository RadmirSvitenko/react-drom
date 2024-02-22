import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import { Container, TitleBox } from './styles';
import ProductCard from 'components/productCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation, Pagination } from 'swiper/modules';

import testImage1 from 'assets/images/testImage2.png';
import Title from 'components/titles/Title';
import { t } from 'i18next';
import { Box } from '@mui/material';
import theme from 'theme';

const ProductPopular = ({ onClose }) => {
  // const catalog = useSelector((state) => state.productReducer.catalog);
  // const isLoading = useSelector((state) => state.productReducer.isLoading);

  // const dispatch = useDispatch();
  // const handleGetProducts = useCallback(async () => {
  //   await dispatch(getProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   handleGetProducts();
  // }, [handleGetProducts]);

  const products = [
    { image: testImage1, name: 'test name' },
    { image: testImage1, name: 'test name' },
    { image: testImage1, name: 'test name' },
    { image: testImage1, name: 'test name' },
    { image: testImage1, name: 'test name' },
    { image: testImage1, name: 'test name' },
    { image: testImage1, name: 'test name' },
  ];

  return (
    <Container>
      <TitleBox>
        <Title title={t('titleRecommended')} />
      </TitleBox>

      <Swiper
        slidesPerView={theme.breakpoints.down('lg') ? 1 : 3}
        centeredSlides={true}
        spaceBetween={-70}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="product-popular-swiper"
        loop
        navigation={true}
      >
        {products?.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductPopular;
