import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import { ProductDiscountContainer } from './styles';
import ProductCard from 'components/productCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import IsLoading from 'components/isLoading/IsLoading';

const ProductDiscount = () => {
  const products = useSelector((state) => state.mainPageStore.catalog);
  const isLoading = useSelector((state) => state.mainPageStore.isLoading);

  const dispatch = useDispatch();
  const handleGetProducts = async () => {
    await dispatch(getProducts());
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <>
      <ProductDiscountContainer>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop
          navigation={true}
        >
          {products?.map((product) => (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ProductDiscountContainer>
    </>
  );
};

export default ProductDiscount;
