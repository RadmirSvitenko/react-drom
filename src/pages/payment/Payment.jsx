import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from 'reducers/productSlice';
import {
  Container,
  DeleteAllBox,
  DeleteAllButton,
  ErrorMessage,
  ErrorMessageBox,
  Form,
  Image,
  InfoBox,
  InfoContainer,
  Input,
  OrderButton,
  OrderContainer,
  PriceBox,
  ProductBox,
  ProductsContainer,
  Text,
} from './styles';
import { t } from 'i18next';
import { Box, Typography, useMediaQuery } from '@mui/material';

import carIcon from 'assets/images/payment_date_car.svg';
import deleteIcon from 'assets/images/delete_payment.svg';
import { useForm } from 'react-hook-form';
import theme from 'theme';

const Payment = () => {
  const cart = useSelector((state) => state.productReducer.cart) || [];
  console.log('cart: ', cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGetData = useCallback(async () => {
    await dispatch(getCart());
  }, [dispatch]);

  const orderSubmit = (d) => {
    console.log(d);
    navigate('/thanks');
  };

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);
  return (
    <Container>
      <DeleteAllBox>
        <DeleteAllButton>удалить</DeleteAllButton>
      </DeleteAllBox>

      <OrderContainer>
        <InfoContainer>
          <ProductsContainer>
            {cart?.map(({ color, product, quantity }, index) => (
              <ProductBox>
                <Image image={product?.images[0]?.image} />
                <InfoBox>
                  <Text>{product.title}</Text>
                  <Box display={'flex'} gap={'20px'}>
                    <Text>Цвет: </Text>
                    <img
                      width={'50px'}
                      height={'50px'}
                      src={color?.image}
                      alt={product.title}
                      style={{
                        borderRadius: '10px',
                        outline: '1px solid #000',
                      }}
                    />
                  </Box>

                  <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <img src={carIcon} alt="carIcon" />

                    <Typography
                      variant="span"
                      sx={{
                        fontSize: '12px',
                        color: '#006EBE',
                      }}
                    >
                      {t('textSafeguards')}
                    </Typography>
                  </Box>

                  <Text>
                    {t('titleQuantity')}: {quantity}
                  </Text>
                </InfoBox>

                <PriceBox>
                  <Box>
                    <Text>${product.price}</Text>
                    <Text>${product.price * quantity}</Text>
                    <Text></Text>
                  </Box>

                  <img
                    width={'40px'}
                    height={'40px'}
                    src={deleteIcon}
                    alt="deleteIcon"
                  />
                </PriceBox>
              </ProductBox>
            ))}
          </ProductsContainer>
        </InfoContainer>

        <Form onSubmit={handleSubmit(orderSubmit)}>
          <Input
            type="number"
            {...register('phone', {
              required: 'Это поле обязательное!',
              minLength: {
                value: '1',
                message: 'минимальное количество символов: 1',
              },

              maxLength: {
                value: '255',
                message: 'максимальное количество символов: 255',
              },
            })}
            placeholder={t('titlePhone')}
          />

          <ErrorMessageBox>
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </ErrorMessageBox>

          <Input
            {...register('surname', {
              required: 'Это поле обязательное!',
              minLength: {
                value: '1',
                message: 'минимальное количество символов: 1',
              },

              maxLength: {
                value: '255',
                message: 'максимальное количество символов: 255',
              },
            })}
            placeholder={t('titleSurname')}
          />

          <ErrorMessageBox>
            {errors.surname && (
              <ErrorMessage>{errors.surname.message}</ErrorMessage>
            )}
          </ErrorMessageBox>

          <Input
            {...register('name', {
              required: 'Это поле обязательное!',
              minLength: {
                value: '1',
                message: 'минимальное количество символов: 1',
              },

              maxLength: {
                value: '255',
                message: 'максимальное количество символов: 255',
              },
            })}
            placeholder={t('titleName')}
          />

          <ErrorMessageBox>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </ErrorMessageBox>

          <Text>
            {t('titleTotal')}: $
            {cart?.reduce(
              (acc, { product, quantity }) => acc + product.price * quantity,
              0
            )}
          </Text>
          <OrderButton type="submit">{t('titleOrder')}</OrderButton>
          <p></p>
        </Form>
      </OrderContainer>
    </Container>
  );
};

export default Payment;
