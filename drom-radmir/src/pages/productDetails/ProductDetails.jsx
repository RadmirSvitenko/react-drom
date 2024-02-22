import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProductCart, getProduct } from 'reducers/productSlice';
import {
  BreadcrumbsBox,
  ButtonAddCart,
  CardContainer,
  ColorBox,
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
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';
import Loading from 'components/loading/Loading';
import { toUpPage } from 'globalFunction';

import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';
import { getImages } from 'reducers/imageSlice';

import { getColors } from 'reducers/colorsSlice';
import { Done } from '@mui/icons-material';
import './styles';
import theme from 'theme';

const ProductDetails = () => {
  const product = useSelector((state) => state.productReducer.product);
  const colors = useSelector((state) => state.colorReducer.colors) || [];
  const images = useSelector((state) => state.imageReducer.images) || [];
  const isLoading = useSelector((state) => state.productReducer.isLoading);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [currentSlide, setCurrentSlide] = useState();
  const [colorSelected, setColorSelected] = useState({
    design: false,
    name: '',
    value: '',
  });
  const [counter, setCounter] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: 'Home', value: '/' },
    { name: 'Catalog', value: '/catalog' },
    { name: product.title, value: product.id },
  ]);

  const handleGetData = useCallback(async () => {
    await dispatch(getProduct({ id: id }));
    await dispatch(getColors());
    await dispatch(getImages({ product_id: id }));
    toUpPage();
  }, [dispatch]);

  const handleAddProductCart = async (e) => {
    e.preventDefault();
    await dispatch(
      addProductCart({
        id: product.id,
        data: colorSelected.value,
        quantity: counter > 0 && counter,
      })
    );
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
          <SliderContainer>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              orientation="vertical"
            >
              <SliderBoxSwicther>
                {isLoading || !product
                  ? images?.map((image) => <Loading width={100} height={100} />)
                  : images?.map(({ id, image, product }) => (
                      <Slide
                        key={id}
                        src={image}
                        alt={product.title}
                        onMouseOver={() => handleChangeSlide(image)}
                      />
                    ))}
              </SliderBoxSwicther>
            </Tabs>

            {isLoading || !product ? (
              <Loading width={500} height={500} />
            ) : (
              <ReactImageMagnify
                className="main-image"
                {...{
                  smallImage: {
                    src: currentSlide || images[0]?.image,
                    alt: 'Product Image',
                    width: isSmallScreen ? 300 : 450,
                    height: isSmallScreen ? 300 : 450,
                  },
                  largeImage: {
                    src: currentSlide || images[0]?.image,
                    alt: 'Product Image',
                    width: isSmallScreen ? 600 : 900,
                    height: isSmallScreen ? 600 : 900,
                  },
                  isHintEnabled: true,
                }}
              />
            )}
          </SliderContainer>

          <InfoContainer>
            <InfoBox>
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
                    <TextStyle>${product.price}</TextStyle>
                  )}
                </Box>

                <Box lineHeight={'50px'}>
                  <TextStyle>{t('titleSelectMaterial')}</TextStyle>

                  <TextMergeBox
                    sx={
                      colors.length > 10 && {
                        overflowY: 'scroll',
                      }
                    }
                  >
                    {colors?.map(({ id, name, image }) => (
                      <React.Fragment key={id}>
                        {isLoading || !colors ? (
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
                </Box>
              </Box>

              <Box display={'flex'} justifyContent={'space-between'}>
                <TextMergeBox>
                  <TextStyle paddingRight={'80px'}>${product.price}</TextStyle>

                  <Box display={'flex'} alignItems={'center'} gap={'15px'}>
                    <div onClick={() => handleChangeCounter('-')}>
                      <img src={minus} alt="-" />
                    </div>

                    <Typography>{counter}</Typography>

                    <div onClick={() => handleChangeCounter('+')}>
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
            <Box>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda et aut, similique doloremque odio provident facilis
              animi non consequatur omnis ipsam vitae tempora fuga eligendi
              quidem iure adipisci reprehenderit possimus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aliquid ipsum, corporis nam
              odio nesciunt eaque laboriosam, quae error temporibus deleniti,
              mollitia soluta in recusandae eos quaerat iure vero dolores at?
            </Box>
          </DescriptionContainer>
        </CardContainer>
      </form>
    </DetailsContainer>
  );
};

export default ProductDetails;
