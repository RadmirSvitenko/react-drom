import React from 'react';
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardImageBox,
  ProductCardInfoBox,
  ProductCardTitleText,
} from './styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onClose }) => {
  const navigate = useNavigate();
  const toDetails = (id) => {
    navigate(`/catalog/${id}`);
    onClose
      ? onClose() && navigate(`/catalog/${id}`)
      : navigate(`/catalog/${id}`);
  };
  return (
    <>
      <ProductCardContainer>
        <ProductCardImageBox product={product}>
          <img
            width={'250px'}
            height={'250px'}
            src={product.images[0]}
            alt={product.title}
          />
        </ProductCardImageBox>
        <ProductCardInfoBox>
          <ProductCardTitleText>{product.title}</ProductCardTitleText>
        </ProductCardInfoBox>
        <ProductCardButton fullWidth onClick={() => toDetails(product.id)}>
          Подробнее
        </ProductCardButton>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
