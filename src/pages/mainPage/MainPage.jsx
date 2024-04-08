import React, { useCallback, useEffect, useState } from 'react';
import {
  CategoryContainer,
  CategoryContainerMobile,
  CategoryProductMobile,
  ImageAd,
  ImagesGrid,
  SlideCategory,
  SlideCategoryDetails,
  SliderContainer,
  TitleBox,
} from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import './styles.css';

import testImage1 from 'assets/images/testImage2.png';
import testImage2 from 'assets/images/testImage4.png';
import testImage3 from 'assets/images/testImage5.png';
import testImage4 from 'assets/images/testImage7.png';
import testImage5 from 'assets/images/testImage6.png';
import testImage6 from 'assets/images/testImage3.png';
import testImage7 from 'assets/images/testImage1.png';

import slide1 from 'assets/images/slide1.png';
import slide2 from 'assets/images/slide2.png';
import slide3 from 'assets/images/slide3.png';

import mobile1 from 'assets/images/mobile-main-image-1.png';
import mobile2 from 'assets/images/mobile-main-image-2.png';
import mobile3 from 'assets/images/mobile-main-image-3.png';

import mobileImage1 from 'assets/images/mobileImage1.png';
import mobileImage2 from 'assets/images/mobileImage2.png';
import mobileImage3 from 'assets/images/mobileImage3.png';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularProducts, getProducts } from 'reducers/productSlice';
import Title from 'components/titles/Title';
import { Box, CircularProgress, useMediaQuery } from '@mui/material';
import { getTokenFromCookies } from 'cookies';

import ProductPopular from 'components/productPopular/ProductPopular';
import theme from 'theme';

const MainPage = () => {
  const TOKEN = getTokenFromCookies();

  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const [products, setProducts] = useState();
  const [categoriesId, setCategoriesId] = useState({});

  console.log('products: ', products);
  const sliderImages = [slide1, slide2, slide3];
  const mobileImages = [mobile1, mobile2, mobile3];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toDetails = (id) => {
    navigate(`/catalog/product/${id}`);
  };

  const handleGetData = useCallback(async () => {
    let categoryOneId;
    let categoryTwoId;
    let categoryThreeId;

    const categoryOne = categories[0];
    const categoryTwo = categories[1];
    const categoryThree = categories[2];

    if (categoryOne) {
      categoryOneId = categoryOne.id;
    }

    if (categoryTwo) {
      categoryTwoId = categoryTwo.id;
    }

    if (categoryThree) {
      categoryThreeId = categoryThree.id;
    }

    if (categoryOneId && categoryTwoId && categoryThreeId) {
      setCategoriesId({
        oneId: categoryOneId,
        twoId: categoryTwoId,
        threeId: categoryThreeId,
      });
    }

    const productsOne = await dispatch(
      getProducts({ category: categoryOneId })
    );

    const productsTwo = await dispatch(
      getProducts({ category: categoryTwoId })
    );

    const productsThree = await dispatch(
      getProducts({ category: categoryThreeId })
    );

    await dispatch(getPopularProducts());
    const payloadProducts = { productsOne, productsTwo, productsThree };
    await setProducts(payloadProducts);
  }, [dispatch]);

  useEffect(() => {
    getTokenFromCookies();
    handleGetData();
  }, [handleGetData, TOKEN]);

  return (
    <>
      <Box
        sx={{
          marginTop: '20px',
        }}
      >
        <Swiper
          autoplay={{
            delay: '5000',
          }}
          pagination={{
            clickable: true,
          }}
          loop
          navigation={sm ? false : true}
          modules={[EffectFade, Autoplay, Navigation]}
          className="main-page-slider"
        >
          <SliderContainer>
            {sm
              ? mobileImages?.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${slide})`,
                        backgroundSize: '100% 70%',
                        backgroundRepeat: 'no-repeat',
                      }}
                      className="slide"
                      alt="slide"
                    />
                  </SwiperSlide>
                ))
              : sliderImages?.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${slide})`,
                        backgroundSize: sm ? '150% 100%' : '100% 100%',
                        backgroundRepeat: 'no-repeat',
                      }}
                      className="slide"
                      alt="slide"
                    />
                  </SwiperSlide>
                ))}
          </SliderContainer>
        </Swiper>
      </Box>
      <Box
        sx={{
          outline: '1px solid #A49989',
        }}
        display={'flex'}
        flexDirection={'column'}
      >
        <TitleBox sx={{ backgroundColor: '#F5F3EE' }}>
          <Title title={categories[0]?.name} />
        </TitleBox>
        {isLoading || !products ? (
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            height={'500px'}
          >
            <CircularProgress size={60} sx={{ color: 'red' }} />
          </Box>
        ) : (
          <CategoryContainer
            sx={{
              gridTemplateColumns: '35% 20% 45%',
              gridTemplateRows: '700px',
            }}
          >
            <ImagesGrid
              sx={{
                gridTemplateRows: '1fr 1fr',
                gridTemplateColumns: '100%',
              }}
            >
              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsOne?.payload[0]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productsOne?.payload?.[0]?.images?.[0]?.image ||
                    testImage1
                  }
                  alt="testImage1"
                />
              </ImageAd>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsOne?.payload[1]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productsOne?.payload?.[1]?.images?.[0]?.image ||
                    testImage2
                  }
                  alt="testImage2"
                />
              </ImageAd>
            </ImagesGrid>

            <ImagesGrid
              sx={{
                gridTemplateRows: '40% 1fr',
                gridTemplateColumns: '100%',
              }}
            >
              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsOne?.payload[2]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productsOne?.payload?.[2]?.images?.[0]?.image ||
                    testImage3
                  }
                  alt="testImage3"
                />
              </ImageAd>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsOne?.payload[3]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productsOne?.payload?.[3]?.images?.[0]?.image ||
                    testImage4
                  }
                  alt="testImage4"
                />
              </ImageAd>
            </ImagesGrid>

            <ImagesGrid
              sx={{
                gridTemplateRows: '1fr 40%',
                gridTemplateColumns: '100%',
              }}
            >
              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsOne?.payload[4]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productsOne?.payload?.[4]?.images?.[0]?.image ||
                    testImage5
                  }
                  alt="testImage3"
                />
              </ImageAd>

              <ImagesGrid
                sx={{
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: '100%',
                }}
              >
                <ImageAd>
                  <div />
                  <span
                    onClick={() =>
                      toDetails(products?.productsOne?.payload[5]?.id)
                    }
                  >
                    Подробнее
                  </span>
                  <img
                    src={
                      products?.productsOne?.payload?.[5]?.images?.[0]?.image ||
                      testImage6
                    }
                    alt="testImage6"
                  />
                </ImageAd>

                <ImageAd>
                  <div />
                  <span
                    onClick={() =>
                      toDetails(products?.productsOne?.payload[6]?.id)
                    }
                  >
                    Подробнее
                  </span>
                  <img
                    src={
                      products?.productsOne?.payload?.[6]?.images?.[0]?.image ||
                      testImage7
                    }
                    alt="testImage6"
                  />
                </ImageAd>
              </ImagesGrid>
            </ImagesGrid>
          </CategoryContainer>
        )}
      </Box>

      <ProductPopular />

      {sm || md ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {mobileImages.map((image) => (
            <img src={image} alt="image" />
          ))}
        </div>
      ) : (
        <></>
      )}

      <Box
        sx={{
          borderTop: '1px solid #A49989',
        }}
        display={'flex'}
        flexDirection={'column'}
      >
        <TitleBox sx={{ backgroundColor: '#F5F3EE' }}>
          <Title title={categories[1]?.name} />
        </TitleBox>
        {isLoading || !products ? (
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            height={'500px'}
          >
            <CircularProgress size={60} sx={{ color: 'red' }} />
          </Box>
        ) : (
          <CategoryContainer
            sx={{
              gridTemplateColumns: '35% 20% 45%',
              gridTemplateRows: '800px',
            }}
          >
            <ImagesGrid
              sx={{
                gridTemplateRows: '50% 1fr 1fr',
                gridTemplateColumns: '100%',
              }}
            >
              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[0]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productsTwo?.payload?.[0]?.images?.[0]?.image ||
                    testImage1
                  }
                  alt="testImage1"
                />
              </ImageAd>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[1]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[1]?.images?.[0]?.image ||
                    testImage2
                  }
                  alt="testImage2"
                />
              </ImageAd>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[2]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[2]?.images?.[0]?.image ||
                    testImage2
                  }
                  alt="testImage3"
                />
              </ImageAd>
            </ImagesGrid>

            <ImagesGrid
              sx={{
                gridTemplateRows: '50% 1fr 1fr',
                gridTemplateColumns: '100%',
              }}
            >
              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[3]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[3]?.images?.[0]?.image ||
                    testImage3
                  }
                  alt="testImage3"
                />
              </ImageAd>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[4]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[4]?.images?.[0]?.image ||
                    testImage4
                  }
                  alt="testImage4"
                />
              </ImageAd>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[5]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[5]?.images?.[0]?.image ||
                    testImage5
                  }
                  alt="testImage5"
                />
              </ImageAd>
            </ImagesGrid>

            <ImagesGrid
              sx={{
                gridTemplateRows: '30% 30% 1fr',
                gridTemplateColumns: '100%',
              }}
            >
              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[6]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[6]?.images?.[0]?.image ||
                    testImage6
                  }
                  alt="testImage5"
                />
              </ImageAd>

              <ImagesGrid
                sx={{
                  gridTemplateColumns: '40% 1fr',
                  gridTemplateRows: '100%',
                }}
              >
                <ImageAd>
                  <div />
                  <span
                    onClick={() =>
                      toDetails(products?.productsTwo?.payload[7]?.id)
                    }
                  >
                    Подробнее
                  </span>
                  <img
                    src={
                      products?.productTwo?.payload?.[7]?.images?.[0]?.image ||
                      testImage7
                    }
                    alt="testImage7"
                  />
                </ImageAd>

                <ImageAd>
                  <div />
                  <span
                    onClick={() =>
                      toDetails(products?.productsTwo?.payload[8]?.id)
                    }
                  >
                    Подробнее
                  </span>
                  <img
                    src={
                      products?.productTwo?.payload?.[8]?.images?.[0]?.image ||
                      testImage7
                    }
                    alt="testImage7"
                  />
                </ImageAd>
              </ImagesGrid>

              <ImageAd>
                <div />
                <span
                  onClick={() =>
                    toDetails(products?.productsTwo?.payload[9]?.id)
                  }
                >
                  Подробнее
                </span>
                <img
                  src={
                    products?.productTwo?.payload?.[9]?.images?.[0]?.image ||
                    testImage5
                  }
                  alt="testImage5"
                />
              </ImageAd>
            </ImagesGrid>
          </CategoryContainer>
        )}
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #A49989',
        }}
        display={'flex'}
        flexDirection={'column'}
      >
        <TitleBox
          sx={{
            color: '#000',
          }}
        >
          <Title title={categories[1]?.name} />
        </TitleBox>

        <Swiper
          slidesPerView={sm ? 1 : 3}
          loop
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: '5000',
          }}
          className="category-slider"
          centeredSlides={true}
        >
          {Array.isArray(products)?.productsThree?.payload?.map(
            (slide, index) => (
              <SwiperSlide key={index} className="category-slider-slide">
                <SlideCategory image={slide.images[0]?.image}>
                  <SlideCategoryDetails onClick={() => toDetails(slide.id)}>
                    Подробнее
                  </SlideCategoryDetails>
                </SlideCategory>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Box>
    </>
  );
};
export default MainPage;
