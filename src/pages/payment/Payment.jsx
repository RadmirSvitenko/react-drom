import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addPayment,
  addProductCart,
  getCart,
  removeProductCart,
  removeProductCartAllQuantity,
} from 'reducers/productSlice';
import {
  BreadcrumbsBox,
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
  Link,
  OrderButton,
  OrderContainer,
  PriceBox,
  ProductBox,
  ProductsContainer,
  Text,
} from './styles';
import { t } from 'i18next';
import { Box, Breadcrumbs, Typography } from '@mui/material';

import carIcon from 'assets/images/payment_date_car.svg';
import deleteIcon from 'assets/images/delete_payment.svg';
import { useForm } from 'react-hook-form';
import ModalPayment from 'components/modalPayment/ModalPayment';

const Payment = () => {
  const cart = useSelector((state) => state.productReducer.cart) || [];
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: 'Home', value: '/' },
    { name: 'Catalog', value: '/catalog' },
  ]);

  const [modalPayment, setModalPayment] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [messagePayment, setMessagePayment] = useState({
    success: 'Всё прошло успешно!',
    details: 'С вами свяжутся в течении 1 - 2 дней',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGetData = useCallback(async () => {
    const cartList = await dispatch(getCart());
    setCartData(cartList?.payload);
  }, [dispatch]);

  const handleChangeLinks = (link) => () => {
    navigate(link);
  };

  const handleAllClear = async (id) => {
    await dispatch(removeProductCartAllQuantity({ id: id }));
    await handleGetData();
  };

  const orderSubmit = async (d) => {
    try {
      await dispatch(addPayment({ mobile: d.phone, name: d.name }));
      setModalPayment(true);
      await dispatch(getCart());
    } catch (error) {
      setModalPayment(true);
      setMessagePayment({
        success: 'Что-то пошло не так',
        details: 'попробуйте повторить операцию ещё раз',
      });
    }
  };

  const togglePayment = () => {
    setModalPayment((open) => !open);
  };

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return (
    <Container>
      <BreadcrumbsBox>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs?.map(({ name, value }) => (
            <Link onClick={handleChangeLinks(value)}>{name}</Link>
          ))}
        </Breadcrumbs>
      </BreadcrumbsBox>

      {/* <DeleteAllBox>
        <DeleteAllButton onClick={() => handleAllClear(cartId)}>
          {t('titleDelete')}
        </DeleteAllButton>
      </DeleteAllBox> */}

      <OrderContainer>
        <InfoContainer>
          <ProductsContainer>
            {cartData.length === 0 ? (
              <Box
                sx={{
                  width: '700px',
                  height: '500px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textWrap: 'wrap',
                }}
              >
                <Text>Вы ничего не выбрали</Text>
              </Box>
            ) : (
              cartData?.map(({ id, color, product, quantity }, index) => (
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
                      <Text>{product.price} .с</Text>
                      <Text>{product.price * quantity} .с</Text>
                      <Text></Text>
                    </Box>

                    <img
                      onClick={() => handleAllClear(id)}
                      width={'40px'}
                      height={'40px'}
                      src={deleteIcon}
                      alt="deleteIcon"
                      style={{
                        cursor: 'pointer',
                        '&:hover': {
                          opacity: 0.7,
                        },
                      }}
                    />
                  </PriceBox>
                </ProductBox>
              ))
            )}
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
            {t('titleTotal')}:{' '}
            {cartData?.reduce(
              (acc, { product, quantity }) => acc + product.price * quantity,
              0
            )}{' '}
            .с
          </Text>
          <OrderButton type="submit">{t('titleOrder')}</OrderButton>
        </Form>
      </OrderContainer>

      <ModalPayment
        open={modalPayment}
        onClose={togglePayment}
        message={messagePayment}
      />
    </Container>
  );
};

export default Payment;
