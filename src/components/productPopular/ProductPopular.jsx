import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import { Container, LoadingBox } from './styles';
import ProductCard from 'components/productCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import IsLoading from 'components/isLoading/IsLoading';
import ProductsPopularTitle from 'components/titles/ProductsPopularTitle';

const ProductPopular = ({ onClose }) => {
  const products = useSelector((state) => state.productReducer.catalog);
  console.log('products: ', products);
  const isLoading = useSelector((state) => state.productReducer.isLoading);

  const dispatch = useDispatch();
  const handleGetProducts = useCallback(async () => {
    await dispatch(getProducts());
  }, [dispatch]);

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
    <Container>
      <ProductsPopularTitle />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="product-popular-swiper"
        loop
        navigation={true}
      >
        {products?.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} onClose={onClose} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductPopular;
