import React from 'react';
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardDetails,
  ProductCardImageBox,
  ProductCardInfoBox,
  ProductCardTitleText,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProduct } from 'reducers/productSlice';
import { Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/catalog/${id}`);
  };
  return (
    <ProductCardContainer onClick={() => navigate('/catalog')}>
      <ProductCardImageBox image={product?.images[0]?.image}>
        <ProductCardDetails>
          <Typography>{product?.title}</Typography>
          <Typography>${product?.price}</Typography>
          <Typography>Подробнее</Typography>
        </ProductCardDetails>
      </ProductCardImageBox>
      <ProductCardInfoBox>
        <ProductCardTitleText>{product.name}</ProductCardTitleText>
      </ProductCardInfoBox>
      {/* <ProductCardButton fullWidth onClick={() => toDetails(product.id)}>
          Подробнее
        </ProductCardButton> */}
    </ProductCardContainer>
  );
};

export default ProductCard;
