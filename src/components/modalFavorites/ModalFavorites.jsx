import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import {
  ContentBox,
  FavoritesContainer,
  FunctionBox,
  ProductContainer,
  ProductImageBox,
  ProductInfoBox,
  Title,
  TitleBox,
} from './styles';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import theme from 'theme';
import { t } from 'i18next';
import { addProductFavorites, getFavorites } from 'reducers/productSlice';

const ModalFavorites = ({ open, onClose }) => {
  const favorites =
    useSelector((state) => state.productReducer.favorites) || [];

  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toCatalog = () => {
    navigate('/catalog');
    onClose();
  };

  const handleGetFavorites = useCallback(async () => {
    await dispatch(getFavorites());
  }, [dispatch]);

  const handleDeleteFavorite = async (data, id) => {
    await dispatch(addProductFavorites({ data: data, id: id }));
    handleGetFavorites();
  };

  useEffect(() => {
    handleGetFavorites();
  }, [handleGetFavorites]);

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
            // width: '100%',
            boxSizing: 'border-box',
          },
        }),
      }}
    >
      <FavoritesContainer>
        <TitleBox>
          <Title>{t('titleFavorite')}</Title>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </TitleBox>

        {favorites.length < 1 && (
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
              Ваш список избранного пока пуст
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

        {Array.isArray(favorites) &&
          favorites?.map((product, index) => (
            <ContentBox key={index}>
              <ProductContainer>
                <ProductImageBox preview={product?.images[0]?.image} />
                <ProductInfoBox>
                  <div>
                    <Typography>{product.title}</Typography>
                    <Typography>${product.price}</Typography>
                  </div>
                </ProductInfoBox>

                <FunctionBox>
                  <Box
                    onClick={() => handleDeleteFavorite(product, product.id)}
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
      </FavoritesContainer>
    </SwipeableDrawer>
  );
};

export default ModalFavorites;
