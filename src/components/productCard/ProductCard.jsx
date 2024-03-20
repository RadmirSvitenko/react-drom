import React from 'react';
import {
  ProductCardContainer,
  ProductCardDetails,
  ProductCardImageBox,
  ProductCardInfoBox,
  ProductCardTitleText,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/catalog/product/${id}`);
  };
  return (
    <ProductCardContainer onClick={() => toDetails(product.id)}>
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
    </ProductCardContainer>
  );
};

export default ProductCard;
