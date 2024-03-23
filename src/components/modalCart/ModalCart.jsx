import React, { useCallback, useEffect, useState } from 'react';
import {
  CartContainer,
  ContentBox,
  Counter,
  FooterBox,
  FunctionBox,
  OrderButton,
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
  CircularProgress,
  IconButton,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductCart,
  getCart,
  removeProductCart,
  removeProductCartAllQuantity,
} from 'reducers/productSlice';

import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';
import theme from 'theme';
import { useNavigate } from 'react-router-dom';

const ModalCart = ({ open, onClose }) => {
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((state) => state.productReducer.cart) || [];
  const isLoading = useSelector((state) => state.productReducer.isLoadingCart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddProductCart = async (id, color) => {
    await dispatch(addProductCart({ id: id, data: color }));
    await handleGetCart();
  };

  const handleRemoveProductCart = async (id, color) => {
    await dispatch(removeProductCart({ id: id, data: color }));
    await handleGetCart();
  };

  const handleAllRemoveProductCart = async (id) => {
    await dispatch(removeProductCartAllQuantity({ id: id }));
    await handleGetCart();
  };

  const toCatalog = () => {
    navigate('/catalog');
    onClose();
  };

  const toPayment = () => {
    navigate('/payment');
    onClose();
  };

  const handleGetCart = useCallback(async () => {
    const cartList = await dispatch(getCart());
    setCartData(cartList?.payload);
  }, [dispatch]);

  useEffect(() => {
    handleGetCart();
  }, [handleGetCart]);

  return (
    <SwipeableDrawer
      transitionDuration={300}
      anchor={'right'}
      open={open}
      onClose={onClose}
      sx={{
        ...(sm && {
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            boxSizing: 'border-box',
          },
        }),
      }}
    >
      <CartContainer>
        <TitleBox>
          <Title>{t('titleCart')}</Title>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </TitleBox>

        {!cartData ||
          (cartData?.length < 0 && (
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
          ))}
        {cartData?.map(({ product, quantity, color }, index) => (
          <ContentBox key={index}>
            <ProductContainer>
              <ProductImageBox preview={product?.images[0]?.image} />
              <ProductInfoBox>
                <div>
                  <Typography>Наименование: {product.title}</Typography>
                  <Typography>Цена: ${product.price * quantity}</Typography>
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
                      handleRemoveProductCart(product.id, color.id)
                    }
                  />

                  <Counter>
                    {isLoading ? (
                      <CircularProgress
                        size={16}
                        sx={{
                          color: '#000',
                        }}
                      />
                    ) : (
                      quantity
                    )}
                  </Counter>

                  <img
                    src={plus}
                    alt="plus"
                    onClick={() => handleAddProductCart(product.id, color.id)}
                  />
                </Box>
              </ProductInfoBox>

              <FunctionBox>
                <Box
                  onClick={() => handleAllRemoveProductCart(product.id)}
                  sx={{
                    '&:hover': {
                      transition: '0.5s',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {t('titleDelete')}
                </Box>
              </FunctionBox>
            </ProductContainer>
          </ContentBox>
        ))}

        <FooterBox>
          <span>
            {t('titleSumm')}: $
            {cartData?.reduce(
              (acc, { quantity, product }) => acc + quantity * product.price,
              0
            )}
          </span>
          <OrderButton
            disabled={cartData && cartData.length > 0 ? false : true}
            onClick={() => toPayment()}
          >
            {t('titleToGoPayment')}
          </OrderButton>
        </FooterBox>
      </CartContainer>
    </SwipeableDrawer>
  );
};

export default ModalCart;
