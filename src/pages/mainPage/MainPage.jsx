import React, { useCallback, useEffect, useState } from 'react';
import {
  CategoryContainer,
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

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularProducts, getProducts } from 'reducers/productSlice';
import Title from 'components/titles/Title';
import { Box, useMediaQuery } from '@mui/material';
import { getTokenFromCookies } from 'cookies';

import Loading from 'components/loading/Loading';
import ProductPopular from 'components/productPopular/ProductPopular';
import theme from 'theme';

const MainPage = () => {
  const TOKEN = getTokenFromCookies();

  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProducts] = useState();
  const [categoriesId, setCategoriesId] = useState({});

  const sliderImages = [slide1, slide2, slide3];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toDetails = (id) => {
    navigate(`/catalog/product/${id}`);
  };

  const toggleDrawer = (value) => {
    setOpenDrawer(value);
  };

  const handleGetData = useCallback(async () => {
    let categoryOneId;
    let categoryTwoId;
    let categoryThreeId;

    const categoryOne = categories.find(
      (value) => value.name.toLowerCase() === 'стеновые панели'.toLowerCase()
    );

    if (categoryOne) {
      categoryOneId = categoryOne.id;
    }

    const categoryTwo = categories.find(
      (value) =>
        value.name.toLowerCase() === 'напольная поверхность'.toLowerCase()
    );

    if (categoryTwo) {
      categoryTwoId = categoryTwo.id;
    }

    const categoryThree = categories.find(
      (value) =>
        value.name.toLowerCase() ===
        'декоративные настенные панели'.toLowerCase()
    );

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
            {sliderImages?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slide})`,
                    backgroundSize: '100% 100%',
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
          <Title
            title={
              (categories[0] === 'Стеновые панели' && categories[0].name) ||
              'Стеновые панели'
            }
          />
        </TitleBox>

        {isLoading || !products ? (
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            height={'100%'}
          >
            <Loading width={'800px'} height={'550px'} />
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
                <img src={testImage1} alt="testImage2" />
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
                <img src={testImage2} alt="testImage2" />
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
                <img src={testImage3} alt="testImage3" />
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
                <img src={testImage4} alt="testImage4" />
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
                <img alt="testImage5" src={testImage5} />
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
                  <img src={testImage6} alt="testImage6" />
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
                  <img src={testImage7} alt="testImage7" />
                </ImageAd>
              </ImagesGrid>
            </ImagesGrid>
          </CategoryContainer>
        )}
      </Box>

      <ProductPopular />

      <Box
        sx={{
          borderTop: '1px solid #A49989',
        }}
        display={'flex'}
        flexDirection={'column'}
      >
        <TitleBox sx={{ backgroundColor: '#F5F3EE' }}>
          <Title
            title={
              (categories[0] === 'Напольная поверхность' &&
                categories[1].name) ||
              'Напольная поверхность'
            }
          />
        </TitleBox>

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
                onClick={() => toDetails(products?.productsTwo?.payload[0]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage1} alt="testImage1" />
            </ImageAd>

            <ImageAd>
              <div />
              <span
                onClick={() => toDetails(products?.productsTwo?.payload[1]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage2} alt="testImage2" />
            </ImageAd>

            <ImageAd>
              <div />
              <span
                onClick={() => toDetails(products?.productsTwo?.payload[2]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage3} alt="testImage3" />
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
                onClick={() => toDetails(products?.productsTwo?.payload[3]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage4} alt="testImage4" />
            </ImageAd>

            <ImageAd>
              <div />
              <span
                onClick={() => toDetails(products?.productsTwo?.payload[4]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage5} alt="testImage5" />
            </ImageAd>

            <ImageAd>
              <div />
              <span
                onClick={() => toDetails(products?.productsTwo?.payload[5]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage6} alt="testImage6" />
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
                onClick={() => toDetails(products?.productsTwo?.payload[6]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage7} alt="testImage7" />
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
                <img src={testImage7} alt="testImage6" />
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
                <img src={testImage7} alt="testImage6" />
              </ImageAd>
            </ImagesGrid>

            <ImageAd>
              <div />
              <span
                onClick={() => toDetails(products?.productsTwo?.payload[9]?.id)}
              >
                Подробнее
              </span>
              <img src={testImage7} alt="testImage6" />
            </ImageAd>
          </ImagesGrid>
        </CategoryContainer>
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
          <Title
            title={
              (categories[0] === 'Декоративные настенные панели' &&
                categories[1].name) ||
              'Декоративные настенные панели'
            }
          />
        </TitleBox>

        <Swiper
          slidesPerView={sm ? 1 : 3}
          loop={true}
          spaceBetween={-90}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: '5000',
          }}
          className="category-slider"
          centeredSlides={true}
        >
          {products?.productsThree?.payload?.map((slide, index) => (
            <SwiperSlide key={index} className="category-slider-slide">
              <SlideCategory image={slide.images[0]?.image}>
                <SlideCategoryDetails onClick={() => toDetails(slide.id)}>
                  Подробнее
                </SlideCategoryDetails>
              </SlideCategory>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};
export default MainPage;
