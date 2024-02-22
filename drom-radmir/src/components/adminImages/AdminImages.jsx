import React, { useCallback, useEffect, useState } from 'react';
import {
  AddImages,
  ButtonSubmit,
  Container,
  CustomInput,
  CustomTitle,
  ErrorMessage,
  ErrorMessageBox,
  Form,
  ImageBox,
  ImagesContainer,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createImage, getImages } from 'reducers/imageSlice';
import { toUpPage } from 'globalFunction';
import { IconButton, Stack } from '@mui/material';
import Loading from 'components/loading/Loading';
import { DataGrid } from '@mui/x-data-grid';
import theme from 'theme';
import { useForm } from 'react-hook-form';
import { AddRounded, CloseRounded } from '@mui/icons-material';

const AdminImages = () => {
  const images = useSelector((state) => state.imageReducer.images) || [];
  const products = useSelector((state) => state.productReducer.catalog) || [];
  const isLoading = useSelector((state) => state.imageReducer.isLoading);

  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);

  const cols = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: '250',
    },
  ];

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleGetImages = useCallback(async () => {
    await dispatch(getImages());
  }, [dispatch]);

  const handleAddImage = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImageView(reader.result);
    };

    reader.readAsDataURL(newImage);
  };

  const handleRemoveImages = () => {
    setImage('');
  };

  const onSubmit = async (d) => {
    await dispatch(createImage({ image: image, product: d.productId }));
  };

  useEffect(() => {
    handleGetImages();
    toUpPage();
  }, [handleGetImages]);

  return (
    <Container>
      {isLoading || !images ? (
        <Stack>
          <Loading width={500} height={500} />
        </Stack>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={products}
            columns={cols}
            sx={{
              color: '#000',
              [theme.breakpoints.down('sm', 'md')]: {
                overflow: 'scroll',
              },
            }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            autoPageSize
          />
        </div>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <CustomTitle variant="h4">Добавить изображение к продукту</CustomTitle>

        <CustomInput
          {...register('productId', {
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
          placeholder="Введите название категории"
          fullWidth
          type="text"
        />

        <ErrorMessageBox>
          {errors.productId && (
            <ErrorMessage>{errors.productId.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ImagesContainer>
          <input
            onChange={handleAddImage}
            id="product_image"
            type="file"
            multiple
            style={{ display: 'none' }}
          />
          {image && (
            <ImageBox>
              <img
                src={imageView}
                alt={'color'}
                width={'80px'}
                height={'80px'}
                style={{
                  borderRadius: '5px',
                }}
              />

              <IconButton
                onClick={() => handleRemoveImages()}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <CloseRounded fontSize="large" />
              </IconButton>
            </ImageBox>
          )}
          <AddImages htmlFor="product_image">
            <AddRounded fontSize="large" />
          </AddImages>
        </ImagesContainer>

        <ButtonSubmit type="submit">Добавить изображение</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default AdminImages;
