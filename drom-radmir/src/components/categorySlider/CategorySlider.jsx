import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import { t } from 'i18next';
import CategoryCard from 'components/categoryCard/CategoryCard';
import categoryImage from 'assets/images/img1_kare.webp';
import CatagoryTitle from 'components/titles/CategoryTitle';
import { Container } from './styles';

const CategorySlider = () => {
  const category = [
    { title: t('categoryTables'), image: `${categoryImage}` },
    { title: t('categoryChairs'), image: `${categoryImage}` },
    { title: t('categoryArmChairs'), image: `${categoryImage}` },
    { title: t('categorySofas'), image: `${categoryImage}` },
    { title: t('categoryDecor'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
    { title: t('categoryBedding'), image: `${categoryImage}` },
  ];

  return (
    <Container>
      <CatagoryTitle />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="category-swiper"
        loop
        navigation={true}
      >
        {category?.map((section) => (
          <SwiperSlide>
            <CategoryCard section={section} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CategorySlider;
