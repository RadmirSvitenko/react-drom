import React, { useCallback, useEffect } from 'react';
import {
  CardButton,
  CardContainer,
  CardImageBox,
  CardInfoBox,
  CardText,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from 'reducers/imageSlice';

const ProductCatalogCard = ({ product, id }) => {
  const images = useSelector((state) => state.imageReducer.images) || [];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toDetails = (id) => () => {
    navigate(`/catalog/product/${id}`);
  };

  const handleGetImages = useCallback(async () => {
    await dispatch(getImages({ product_id: id }));
  }, [dispatch]);

  useEffect(() => {
    handleGetImages();
  }, [handleGetImages]);

  return (
    <CardContainer key={id}>
      <CardImageBox image={product.images[0]?.image} />
      <CardInfoBox>
        <CardText fontWeight={'700'}>{product.title}</CardText>
      </CardInfoBox>
      <CardInfoBox>
        <CardText fontWeight={'550'}>${product.price}</CardText>
      </CardInfoBox>

      <CardButton onClick={toDetails(product.id)}>подробнее</CardButton>
    </CardContainer>
  );
};

export default ProductCatalogCard;
