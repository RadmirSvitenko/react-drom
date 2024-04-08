import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addProductCart,
  addProductFavorites,
  getCart,
  getFavorites,
  getProduct,
} from 'reducers/productSlice';
import {
  BreadcrumbsBox,
  ButtonAddCart,
  CardContainer,
  ColorBox,
  ColorMessageBox,
  DescriptionContainer,
  DetailsContainer,
  InfoBox,
  InfoContainer,
  Link,
  Slide,
  SliderBoxSwicther,
  SliderContainer,
  TextMergeBox,
  TextStyle,
  TextTitleStyle,
} from './styles';
import { t } from 'i18next';
import {
  Box,
  Breadcrumbs,
  IconButton,
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';
import Loading from 'components/loading/Loading';
import { toUpPage } from 'globalFunction';

import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';
import { Done } from '@mui/icons-material';
import favorite_icon from 'assets/images/favorite_icon.png';
import './styles';
import theme from 'theme';

const ProductDetails = () => {
  const product = useSelector((state) => state.productReducer.product);
  const cartCounter = useSelector((state) => state.productReducer.cart);
  const isLoading = useSelector(
    (state) => state.productReducer.isLoadingProducts
  );

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [currentSlide, setCurrentSlide] = useState();
  const [colorSelected, setColorSelected] = useState({
    design: false,
    name: '',
    value: '',
    message: false,
  });
  const [counter, setCounter] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: 'Home', value: '/' },
    { name: 'Catalog', value: '/catalog' },
    { name: product.title, value: product.id },
  ]);

  const handleGetData = useCallback(async () => {
    await dispatch(getProduct({ id: id }));
    toUpPage();
  }, [dispatch]);

  const handleGetCart = useCallback(async () => {
    await dispatch(getCart());
  }, [dispatch]);

  const handleAddProductCart = async (e) => {
    e.preventDefault();
    if (colorSelected.value !== '') {
      await dispatch(
        addProductCart({
          id: product.id,
          data: colorSelected.value,
        })
      );
      handleGetCart();
    } else if (product?.colors && product?.colors.length === 0) {
      await dispatch(
        addProductCart({
          id: product.id,
          data: '',
        })
      );
    } else {
      setColorSelected((prevValue) => ({
        ...prevValue,
        message: true,
      }));
      return; // Остановить выполнение функции, чтобы избежать отправки пустых кавычек и получения корзины
    }

    await dispatch(getCart());
  };

  const handleChangeLinks = (link) => () => {
    navigate(link);
  };

  const handleChangeSlide = (slide) => {
    setTimeout(() => {
      setCurrentSlide(slide);
    }, 350);
  };

  const handleSelectColor = (id, name) => {
    setColorSelected({ design: id, value: id, name: name });
  };

  const handleChangeCounter = (value) => {
    if (value === '-' && counter > 0) {
      setCounter(counter - 1);
    } else if (value === '+') {
      setCounter(counter + 1);
    }
  };

  const handleAddToFavorites = async (data, id) => {
    await dispatch(addProductFavorites({ data: data, id: id }));
    await dispatch(getFavorites());
  };

  useEffect(() => {
    handleGetData();
  }, [handleGetData, id]);

  return (
    <DetailsContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
      }}
    >
      <BreadcrumbsBox>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs?.map(({ name, value }) => (
            <Link onClick={handleChangeLinks(value)}>{name}</Link>
          ))}
        </Breadcrumbs>
      </BreadcrumbsBox>

      <form onSubmit={handleAddProductCart}>
        <CardContainer>
          {product && product.images && product.images.length > 0 ? (
            <SliderContainer>
              <Tabs
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                orientation="vertical"
              >
                <SliderBoxSwicther>
                  {isLoading || !product
                    ? product?.images?.map(({ image }) => (
                        <Loading width={100} height={100} />
                      ))
                    : product?.images?.map(({ id, image, product }) => (
                        <Slide
                          key={id}
                          src={image}
                          alt={product.title}
                          onMouseOver={() => handleChangeSlide(image)}
                        />
                      ))}
                </SliderBoxSwicther>
              </Tabs>

              <ReactImageMagnify
                className="main-image"
                {...{
                  smallImage: {
                    src: currentSlide || product?.images[0]?.image,
                    alt: 'Product Image',
                    width: isSmallScreen ? 300 : 450,
                    height: isSmallScreen ? 300 : 450,
                  },
                  largeImage: {
                    src: currentSlide || product?.images[0]?.image,
                    alt: 'Product Image',
                    width: isSmallScreen ? 600 : 900,
                    height: isSmallScreen ? 600 : 900,
                  },
                  isHintEnabled: true,
                }}
              />
            </SliderContainer>
          ) : (
            <Loading width={500} height={500} />
          )}

          <InfoContainer>
            <InfoBox>
              <IconButton
                sx={{
                  position: 'absolute',
                  margin: '10px 0px',
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
              <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
                <Box lineHeight={'30px'}>
                  {isLoading || !product ? (
                    <Loading width={'300px'} height={'50px'} />
                  ) : (
                    <TextTitleStyle>{product.title}</TextTitleStyle>
                  )}

                  {isLoading || !product ? (
                    <Loading width={'200px'} height={'50px'} />
                  ) : (
                    <TextStyle>{product.price} с.</TextStyle>
                  )}
                </Box>

                <Box lineHeight={'50px'}>
                  <TextStyle>{t('titleSelectMaterial')}</TextStyle>

                  <TextMergeBox
                    sx={
                      product?.colors?.length > 10 && {
                        overflowY: 'scroll',
                      }
                    }
                  >
                    {product?.colors?.map(({ id, name, image }) => (
                      <React.Fragment key={id}>
                        {isLoading || !product?.colors ? (
                          <Loading width={'50px'} height={'50px'} />
                        ) : (
                          <ColorBox
                            image={image}
                            onClick={() => handleSelectColor(id, name)}
                            onMouseOver={() => handleChangeSlide(image)}
                          >
                            {colorSelected.design === id && (
                              <Done
                                fontSize="large"
                                sx={{
                                  color: '#7c0245',
                                }}
                              />
                            )}
                          </ColorBox>
                        )}
                      </React.Fragment>
                    ))}
                  </TextMergeBox>

                  <ColorMessageBox
                    display={colorSelected.message ? 'flex' : 'none'}
                  >
                    Вы не выбрали цвет.
                  </ColorMessageBox>
                </Box>
              </Box>

              <Box display={'flex'} justifyContent={'space-between'}>
                <TextMergeBox>
                  <TextStyle>{product.price} с.</TextStyle>

                  <Box display={'flex'} alignItems={'center'} gap={'15px'}>
                    <div
                      style={{ alignItems: 'center' }}
                      onClick={() => handleChangeCounter('-')}
                    >
                      <img src={minus} alt="-" />
                    </div>

                    <Typography>{counter}</Typography>

                    <div
                      style={{ alignItems: 'center' }}
                      onClick={() => handleChangeCounter('+')}
                    >
                      <img src={plus} alt="-" />
                    </div>
                  </Box>

                  <ButtonAddCart
                    sx={{ margin: '0px 20px' }}
                    variant="contained"
                    onClick={(e) => handleAddProductCart(e)}
                  >
                    {t('detailsButttonAdd')}
                  </ButtonAddCart>
                </TextMergeBox>
              </Box>
            </InfoBox>
          </InfoContainer>
          <DescriptionContainer>
            <Box>{product?.description}</Box>
          </DescriptionContainer>
        </CardContainer>
      </form>
    </DetailsContainer>
  );
};

export default ProductDetails;
