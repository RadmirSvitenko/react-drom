import React from 'react';
import {
  CardButton,
  CardContainer,
  CardImageBox,
  CardInfoBox,
  CardText,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const ProductCatalogCard = ({ product, isLoading }) => {
  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/catalog/${id}`);
  };

  return (
    <CardContainer>
      <CardImageBox image={product.images[0]} />
      <CardInfoBox>
        <CardText>{product.title}</CardText>
      </CardInfoBox>
      <CardButton onClick={() => toDetails(product.id)}>Подробнее</CardButton>
    </CardContainer>
  );
};

export default ProductCatalogCard;
