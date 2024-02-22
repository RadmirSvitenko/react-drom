import React, { useCallback, useEffect, useState } from 'react';
import {
  CartContainer,
  ContentBox,
  Counter,
  FunctionBox,
  ProductContainer,
  ProductImageBox,
  ProductInfoBox,
  Title,
  TitleBox,
} from './styles';
import { t } from 'i18next';
import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenFromCookies } from 'cookies';
import { addProductCart, getCart } from 'reducers/productSlice';

import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';
import theme from 'theme';
import { useNavigate } from 'react-router-dom';

const ModalCart = ({ open, onClose }) => {
  const TOKEN = getTokenFromCookies();

  const cart = useSelector((state) => state.productReducer.cart) || [];
  console.log('cart: ', cart);

  const [counter, setCounter] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeCounter = async (math, quantity, id, color) => {
    let valueCount;

    if (math === '+') {
      valueCount = quantity + 1;
    } else if (math === '-' && quantity > 0) {
      valueCount = quantity - 1;
    }
    await dispatch(
      addProductCart({ id: id, color: color, quantity: valueCount }),
      setCounter(valueCount)
    );
  };

  const toCatalog = () => {
    navigate('/catalog');
    onClose();
  };

  const handleGetCart = useCallback(async () => {
    await dispatch(getCart());
  }, [dispatch, counter]);

  useEffect(() => {
    handleGetCart();
  }, [handleGetCart]);

  return (
    <SwipeableDrawer
      transitionDuration={700}
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <CartContainer>
        <TitleBox>
          <Title>{t('titleCart')}</Title>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </TitleBox>

        {cart.length < 1 && (
          <Box
            display={'flex'}
            width={'100%'}
            height={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <h4
              style={{
                fontFamily: theme.typography.fontFamily[1],
                color: '#000',
              }}
            >
              Ваша корзина пока пуста
            </h4>

            <Button
              sx={{
                fontFamily: theme.typography.fontFamily[1],
                color: '#fafafa',
                backgroundColor: '#5D5146',
                '&:hover': {
                  backgroundColor: '#534537',
                },
              }}
              onClick={() => toCatalog()}
            >
              Перейти в каталог
            </Button>
          </Box>
        )}
        {cart?.map(({ color, product, quantity }, index) => (
          <ContentBox key={index}>
            <ProductContainer>
              <ProductImageBox preview={product?.images[0]?.image} />
              <ProductInfoBox>
                <div>
                  <Typography>Наименование: {product.title}</Typography>
                  <Typography>Цена: ${product.price}</Typography>
                  <Box display={'flex'}>
                    <Typography marginRight={'10px'}>Цвет: </Typography>

                    <img
                      style={{
                        borderRadius: '5px',
                      }}
                      src={color?.image}
                      alt="color"
                      width={'40px'}
                      height={'40px'}
                    />
                  </Box>
                </div>

                <Box display={'flex'}>
                  <img
                    src={minus}
                    alt="minus"
                    onClick={() =>
                      handleChangeCounter('-', quantity, product.id, color)
                    }
                  />
                  <Counter>{quantity}</Counter>
                  <img
                    src={plus}
                    alt="plus"
                    onClick={() =>
                      handleChangeCounter('+', quantity, product.id, color)
                    }
                  />
                </Box>
              </ProductInfoBox>

              <FunctionBox>
                <Box
                  sx={{
                    '&:hover': {
                      transition: '0.5s',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    },
                  }}
                >
                  удалить
                </Box>
              </FunctionBox>
            </ProductContainer>
          </ContentBox>
        ))}
      </CartContainer>
    </SwipeableDrawer>
  );
};

export default ModalCart;
