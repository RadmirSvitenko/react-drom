import React, { useCallback, useEffect, useState } from 'react';
import {
  CategoryContainer,
  Container,
  Image,
  ImageAd,
  ImagesGrid,
  MobileBoxImage,
  MobileImage,
  Slide,
  SlideCategory,
  SlideCategoryDetails,
  SliderContainer,
  TitleBox,
} from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

import slider1 from 'assets/images/slider1.png';
import slider2 from 'assets/images/slider2.png';
import slider3 from 'assets/images/slider3.png';

import testImage1 from 'assets/images/testImage2.png';
import testImage2 from 'assets/images/testImage4.png';
import testImage3 from 'assets/images/testImage5.png';
import testImage4 from 'assets/images/testImage7.png';
import testImage5 from 'assets/images/testImage6.png';
import testImage6 from 'assets/images/testImage3.png';
import testImage7 from 'assets/images/testImage1.png';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import Title from 'components/titles/Title';
import { Box, SwipeableDrawer } from '@mui/material';
import ProductPopular from 'components/productPopular/ProductPopular';
import theme from 'theme';
import { getTokenFromCookies } from 'cookies';
import {} from 'components/header/styles';

import favorite_icon from 'assets/images/favorite_icon.png';
import bag_icon from 'assets/images/bag_icon.png';
import user_icon from 'assets/images/user_icon.png';
import language_icon from 'assets/images/language_icon.png';

const MainPage = () => {
  const TOKEN = getTokenFromCookies();

  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];
  // const isLoading = useSelector((state) => state.productReducer.isLoading);

  const { sm } = theme.breakpoints.values;

  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProducts] = useState();
  console.log('1: ', products?.productsOne?.payload);
  console.log('2: ', products?.productTwo?.payload);

  const sliderImages = [
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
  ];

  const gridStyles = {
    category: {
      categoryOne: {
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '100%',
      },

      categoryTwo: {
        gridTemplateRows: '40% 1fr',
        gridTemplateColumns: '100%',
      },

      categoryThree: {
        gridTemplateRows: '1fr 40%',
        gridTemplateColumns: '100%',
      },

      categoryFour: {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '100%',
      },

      categoryFive: {
        gridTemplateColumns: '60% 1fr',
        gridTemplateRows: '100%',
      },
    },
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toCatalog = (title, id) => {
    navigate('/catalog');
  };

  const toggleDrawer = (value) => {
    setOpenDrawer(value);
  };

  const handleGetData = useCallback(async () => {
    let categoryOneId;
    let categoryTwoId;

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

    const productsOne = await dispatch(
      getProducts({ category: categoryOneId })
    );

    const productsTwo = await dispatch(
      getProducts({ category: categoryTwoId })
    );

    const payloadProducts = { productsOne, productsTwo };
    await setProducts(payloadProducts);
  }, [dispatch]);

  useEffect(() => {
    getTokenFromCookies();
    handleGetData();
  }, [handleGetData, TOKEN]);

  return (
    <Container>
      <MobileBoxImage>
        <MobileImage />
      </MobileBoxImage>

      <SliderContainer>
        <Swiper
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={0}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="main-slider"
        >
          {sliderImages?.map((slide, index) => (
            <SwiperSlide key={index} className="main-slider-slide">
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>

      <Box display={'flex'} flexDirection={'column'}>
        <TitleBox sx={{ backgroundColor: '#F5F3EE' }}>
          <Title
            title={
              (categories[0] === 'Стеновые панели' && categories[0].name) ||
              'Стеновые панели'
            }
          />
        </TitleBox>

        {/* <CategoryContainer
          sx={{
            gridTemplateColumns: '35% 20% 45%',
            gridTemplateRows: '800px',
          }}
        >
          {products?.productsOne.payload?.map((product, index) => (
            <ImagesGrid key={index} sx={gridStyles.category[product.name]}>
              {product.images.map(({ id, image }) => (
                <ImageAd key={id}>
                  <img src={image} alt={product.title} />
                </ImageAd>
              ))}
            </ImagesGrid>
          ))}
        </CategoryContainer> */}

        <CategoryContainer
          sx={{
            gridTemplateColumns: '35% 20% 45%',
            gridTemplateRows: '550px',
          }}
        >
          <ImagesGrid
            sx={{
              gridTemplateRows: '1fr 1fr',
              gridTemplateColumns: '100%',
            }}
          >
            <ImageAd>
              <Image
                // src={products?.productsOne?.payload[0]?.images[0]?.image}
                src={testImage1}
                alt="testImage2"
              />
              <div style={{ zIndex: '1000' }}>radmir</div>
            </ImageAd>

            <ImageAd>
              <img
                // src={products?.productsOne?.payload[1]?.images[0]?.image}
                src={testImage2}
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
              <img
                // src={products?.productsOne?.payload[2]?.images[0]?.image}
                src={testImage3}
                alt="testImage3"
              />
            </ImageAd>

            <ImageAd>
              <img
                // src={products?.productsOne?.payload[3]?.images[0]?.image}
                src={testImage4}
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
              <img
                // src={products?.productsOne?.payload[4]?.images[0]?.image}
                alt="testImage5"
                src={testImage5}
              />
            </ImageAd>

            <ImagesGrid
              sx={{
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '100%',
              }}
            >
              <ImageAd>
                <img
                  // src={products?.productsOne?.payload[5]?.images[0]?.image}
                  src={testImage6}
                  alt="testImage6"
                />
              </ImageAd>

              <ImageAd>
                <img
                  // src={products?.productsOne?.payload[6]?.images[0]?.image}
                  src={testImage7}
                  alt="testImage7"
                />
              </ImageAd>
            </ImagesGrid>
          </ImagesGrid>
        </CategoryContainer>
      </Box>

      <ProductPopular />

      <Box display={'flex'} flexDirection={'column'}>
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
            gridTemplateRows: '700px',
          }}
        >
          <ImagesGrid
            sx={{
              gridTemplateRows: '50% 1fr 1fr',
              gridTemplateColumns: '100%',
            }}
          >
            <ImageAd>
              <img
                // src={products.categoryTwo[0]?.images[0]?.image || testImage1}
                src={testImage1}
                alt="testImage1"
              />
            </ImageAd>

            <ImageAd>
              <img
                // src={products.categoryTwo[1]?.images[0]?.image || testImage2}
                src={testImage2}
                alt="testImage2"
              />
            </ImageAd>

            <ImageAd>
              <img
                // src={products.categoryTwo[2]?.images[0]?.image || testImage3}
                src={testImage3}
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
              <img
                // src={products.categoryTwo[3]?.images[0]?.image || testImage4}
                src={testImage4}
                alt="testImage4"
              />
            </ImageAd>

            <ImageAd>
              <img
                // src={products.categoryTwo[4]?.images[0]?.image || testImage5}
                src={testImage5}
                alt="testImage5"
              />
            </ImageAd>

            <ImageAd>
              <img
                // src={products.categoryTwo[5]?.images[0]?.image || testImage6}
                src={testImage6}
                alt="testImage6"
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
              <img
                // src={products.categoryTwo[6]?.images[0]?.image || testImage5}
                src={testImage7}
                alt="testImage7"
              />
            </ImageAd>

            <ImagesGrid
              sx={{
                gridTemplateColumns: '40% 1fr',
                gridTemplateRows: '100%',
              }}
            >
              <ImageAd>
                <img
                  // src={products.categoryTwo[8]?.images[0]?.image || testImage4}
                  src={testImage7}
                  alt="testImage6"
                />
              </ImageAd>

              <ImageAd>
                <img
                  // src={products.categoryTwo[9]?.images[0]?.image || testImage5}
                  src={testImage7}
                  alt="testImage6"
                />
              </ImageAd>
            </ImagesGrid>

            <ImageAd>
              <img
                // src={products.categoryTwo[10]?.images[0]?.image || testImage3}
                src={testImage7}
                alt="testImage6"
              />
            </ImageAd>
          </ImagesGrid>
        </CategoryContainer>

        <Swiper
          slidesPerView={theme.breakpoints.down('md') ? 1 : 3}
          loop={true}
          spaceBetween={-90}
          navigation={true}
          modules={[Navigation]}
          className="category-slider"
          centeredSlides={true}
        >
          {sliderImages?.map((slide, index) => (
            <SwiperSlide key={index} className="category-slider-slide">
              <SlideCategory image={slide}>
                <SlideCategoryDetails>TEXT</SlideCategoryDetails>
              </SlideCategory>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box>
        <SwipeableDrawer
          // container={container}
          anchor="bottom"
          open={openDrawer}
          // onClose={toggleDrawer(false)}
          // onOpen={toggleDrawer(true)}
          // swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <img src={favorite_icon} alt="favorite_icon" />
            <img src={bag_icon} alt="bag_icon" />
            <img src={user_icon} alt="user_icon" />
            <img src={language_icon} alt="language_icon" />
          </Box>
        </SwipeableDrawer>
      </Box>
    </Container>
  );
};
export default MainPage;
