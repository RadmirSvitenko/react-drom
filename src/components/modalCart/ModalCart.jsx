import React, { useState } from 'react';
import {
  CartContainer,
  ContentBox,
  ProductContainer,
  ProductFunctionBox,
  ProductImageBox,
  ProductInfoBox,
  Title,
  TitleBox,
} from './styles';
import { t } from 'i18next';
import { IconButton, SwipeableDrawer } from '@mui/material';
import { AddRounded, Close, RemoveRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const ModalCart = ({ open, onClose }) => {
  const products = useSelector((state) => state.productReducer.catalog);
  const [counter, setCounter] = useState(1);

  const handleChangeCounter = (value) => {
    if (value === '-' && counter > 0) {
      setCounter(counter - 1);
    } else if (value === '+') {
      setCounter(counter + 1);
    }
  };

  return (
    <SwipeableDrawer
      transitionDuration={700}
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <CartContainer>
        <TitleBox>
          <Title>{t('headerButtonCart')}</Title>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </TitleBox>
        {products?.map((product, index) => (
          <ContentBox key={index}>
            <ProductContainer>
              <ProductImageBox preview={product.images[0]} />
              <ProductInfoBox>{product.title}</ProductInfoBox>
              <ProductFunctionBox>
                <IconButton onClick={() => handleChangeCounter('+')}>
                  <AddRounded />
                </IconButton>
                {counter}
                <IconButton onClick={() => handleChangeCounter('-')}>
                  <RemoveRounded />
                </IconButton>
              </ProductFunctionBox>
            </ProductContainer>
          </ContentBox>
        ))}
      </CartContainer>
    </SwipeableDrawer>
  );
};

export default ModalCart;
