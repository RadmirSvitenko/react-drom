import IsLoading from 'components/isLoading/IsLoading';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from 'reducers/productSlice';
import {
  ButtonAddCart,
  CustomIconButton,
  DetailsContainer,
  InfoContainer,
  LoadingContainer,
  Slide,
  SliderBoxSwicther,
  SliderContainer,
  TextMergeBox,
  TextStyle,
  TextTitleStyle,
} from './styles';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';
import { AddRounded, RemoveRounded } from '@mui/icons-material';
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
  const product = useSelector((state) => state.productReducer.product);
  const isLoading = useSelector((state) => state.productReducer.isLoading);

  const [currentSlide, setCurrentSlide] = useState();
  const [counter, setCounter] = useState(0);

  const productTest = {
    discount: 15,
    materials: [
      {
        id: 1,
        name: 'дуб',
        image:
          'https://avatars.dzeninfra.ru/get-zen_doc/1917783/pub_6287b6f0d6720b5746eb4d3a_6287b70bd6720b5746eb7c0a/scale_1200',
      },

      {
        id: 2,
        name: 'красное дерево',
        image: 'https://www.mebelcompass.ru/images/a2013_1/2-021819022013.jpg',
      },

      {
        id: 3,
        name: 'лдсп',
        image: 'https://mebcorp.ru/foto-material/1.jpg',
      },
    ],

    colors: [
      {
        id: 1,
        name: 'берюзовый',
        value: '#2bf7cb',
      },

      {
        id: 2,
        name: 'бежевый',
        value: '#dadada',
      },

      {
        id: 3,
        name: 'красный',
        value: '#ff0000',
      },
    ],
  };

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleGetProduct = useCallback(async () => {
    await dispatch(getProduct({ id: id }));
    toUpPage();
  }, [dispatch]);

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleChangeSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const handleChangeCounter = (value) => {
    if (value === '-' && counter > 0) {
      setCounter(counter - 1);
    } else if (value === '+') {
      setCounter(counter + 1);
    }
  };

  const handleSetSlide = () => {
    if (product && product.images && product.images.length > 0) {
      setCurrentSlide(product.images[0]);
    }
  };

  useEffect(() => {
    handleSetSlide();
  }, [product]);

  useEffect(() => {
    handleGetProduct();
  }, [handleGetProduct]);

  if (isLoading || !product) {
    return (
      <LoadingContainer>
        <IsLoading />
      </LoadingContainer>
    );
  }

  return (
    <DetailsContainer>
      <SliderContainer>
        <SliderBoxSwicther>
          {product?.images.map((image) => (
            <Slide
              src={image}
              alt={product.title}
              onMouseOver={() => handleChangeSlide(image)}
            />
          ))}
        </SliderBoxSwicther>

        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Product Image',
              width: 500,
              height: 500,
              src: currentSlide,
            },
            largeImage: {
              src: currentSlide,
              width: 1500,
              height: 1500,
            },
            isHintEnabled: true,
          }}
        />
      </SliderContainer>

      <InfoContainer>
        <TextTitleStyle>{product.title}</TextTitleStyle>
        <TextStyle>{product.description}</TextStyle>

        <TextMergeBox>
          <TextStyle sx={{ fontWeight: '900' }}>
            ${Math.floor((100 - productTest.discount) * (product.price / 100))}
          </TextStyle>
          <TextStyle sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
            ${product.price}
          </TextStyle>
          <TextStyle>
            Ваша выгода: ${productTest.discount}%<TextStyle></TextStyle>
          </TextStyle>
        </TextMergeBox>

        <TextStyle>{t('filterTitleMaterial')}</TextStyle>
        <TextMergeBox>
          {productTest.materials?.map(({ id, name, image }) => (
            <img
              key={id}
              src={image}
              alt={name}
              width={'50px'}
              height={'50px'}
              onMouseOver={() => handleChangeSlide(image)}
            />
          ))}
        </TextMergeBox>

        <TextStyle>{t('filterTitleColor')}</TextStyle>
        <TextMergeBox>
          {productTest.colors?.map(({ id, name, value }) => (
            <Box
              key={id}
              sx={{
                width: '50px',
                height: '50px',
                backgroundColor: `${value}`,
              }}
            />
          ))}
        </TextMergeBox>

        <TextMergeBox>
          <Box display={'flex'} alignItems={'center'} gap={'15px'}>
            <CustomIconButton onClick={() => handleChangeCounter('-')}>
              <RemoveRounded />
            </CustomIconButton>

            <Typography fontSize={'20px'}>{counter}</Typography>

            <CustomIconButton onClick={() => handleChangeCounter('+')}>
              <AddRounded />
            </CustomIconButton>
          </Box>

          <ButtonAddCart sx={{ margin: '0px 20px' }} variant="contained">
            {t('detailsButttonAdd')}
          </ButtonAddCart>
        </TextMergeBox>
      </InfoContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;
