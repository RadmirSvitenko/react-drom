import React, { useState } from 'react';
import {
  CardButton,
  CardContainer,
  CardImageBox,
  CardInfoBox,
  CardText,
  ProductClassBox,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';

import favorite_icon from 'assets/images/favorite_icon.png';
import { t } from 'i18next';
import { addProductFavorites, getFavorites } from 'reducers/productSlice';

const ProductCatalogCard = ({ product, id }) => {
  const [viasableButton, setVisableButton] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toDetails = (id) => () => {
    navigate(`/catalog/product/${id}`);
  };

  const handleAddToFavorites = async (data, id) => {
    await dispatch(addProductFavorites({ data: data, id: id }));
    await dispatch(getFavorites());
  };

  return (
    <CardContainer key={id}>
      <CardImageBox
        onMouseEnter={() => setVisableButton(true)}
        onMouseLeave={() => setVisableButton(false)}
        image={product.images[0]?.image}
      >
        {product &&
        product.product_class &&
        product.product_class !== 'стандарт' ? (
          <ProductClassBox>{product.product_class}</ProductClassBox>
        ) : (
          <></>
        )}

        <IconButton
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
          onClick={() => handleAddToFavorites(product, product.id)}
        >
          <img
            src={favorite_icon}
            alt={t('titleCart')}
            width={'26px'}
            height={'26px'}
          />
        </IconButton>

        <CardButton
          viasableButton={viasableButton}
          onClick={toDetails(product.id)}
        >
          подробнее
        </CardButton>
      </CardImageBox>
      <CardInfoBox>
        <CardText fontWeight={'700'}>{product.title}</CardText>
        <CardText fontWeight={'550'}>${product.price}</CardText>
      </CardInfoBox>
    </CardContainer>
  );
};

export default ProductCatalogCard;
