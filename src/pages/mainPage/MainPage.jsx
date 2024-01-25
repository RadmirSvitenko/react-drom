import React, { useEffect } from 'react';
import {
  CatalogButton,
  Container,
  PresentationContainer,
  SlidersContainer,
} from './styles';

import ProductPopular from 'components/productPopular/ProductPopular';
import CategorySlider from 'components/categorySlider/CategorySlider';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const toCatalog = () => {
    navigate('/catalog');
  };

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    toUpPage();
  }, []);

  return (
    <Container>
      <PresentationContainer>
        <CatalogButton onClick={() => toCatalog()}>
          Перейти в каталог
        </CatalogButton>
      </PresentationContainer>
      <SlidersContainer>
        <ProductPopular />
        <CategorySlider />
      </SlidersContainer>
    </Container>
  );
};
export default MainPage;
