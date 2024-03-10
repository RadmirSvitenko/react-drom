import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularProducts, getProducts } from 'reducers/productSlice';
import { Container, TitleBox } from './styles';
import ProductCard from 'components/productCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation, Autoplay } from 'swiper/modules';

import Title from 'components/titles/Title';
import { t } from 'i18next';
import { useMediaQuery } from '@mui/material';
import theme from 'theme';

const ProductPopular = ({ onClose }) => {
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const popularProducts =
    useSelector((state) => state.productReducer.popularProducts) || [];
  console.log('popularProducts: ', popularProducts);

  const products = useSelector((state) => state.productReducer.catalog) || [];
  console.log('products: ', products);

  const isLoading = useSelector((state) => state.productReducer.isLoading);

  const dispatch = useDispatch();

  const handleGetData = useCallback(async () => {
    await dispatch(getPopularProducts());
    await dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return (
    <Container>
      <TitleBox>
        <Title title={t('titleRecommended')} />
      </TitleBox>

      <Swiper
        slidesPerView={sm ? 1 : 3}
        centeredSlides={true}
        autoplay={{
          delay: '5000',
        }}
        spaceBetween={-70}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        className="product-popular-swiper"
        loop
        navigation={true}
      >
        {popularProducts && popularProducts.length > 0
          ? popularProducts?.map((product) => (
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            ))
          : products?.map((product) => (
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Container>
  );
};

export default ProductPopular;
