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
import { IconButton, Skeleton, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {} from 'reducers/categorySlice';
import { DataGrid } from '@mui/x-data-grid';
import { toUpPage } from 'globalFunction';
import theme from 'theme';
import {
  createColor,
  deleteColor,
  getColors,
  updateColor,
} from 'reducers/colorsSlice';
import { AddRounded, CloseRounded } from '@mui/icons-material';

const AdminColors = () => {
  const colors = useSelector((state) => state.colorReducer.colors) || [];
  const isLoading = useSelector((state) => state.colorReducer.isLoading);

  const [productData, setProductData] = useState(null);
  const [productDataView, setProductDataView] = useState(null);

  const cols = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: '250',
    },
  ];

  const { register: colorPost, handleSubmit: SubmitColorPost } = useForm();

  const { register: colorUpdate, handleSubmit: SubmitColorUpdate } = useForm();

  const { register: colorDelete, handleSubmit: SubmitColorDelete } = useForm();

  const {
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const formData = new FormData();

  const handleGetColors = useCallback(async () => {
    await dispatch(getColors());
    toUpPage();
  }, [dispatch]);

  const handleCreateColor = async (d) => {
    await dispatch(createColor({ name: d.colorCreate, image: productData }));
  };

  const handleUpdateColor = async (d) => {
    console.log(d);
    await dispatch(updateColor({ name: d.colorUpdate, id: d.colorUpdateId }));
  };

  const handleDeleteColor = async (d) => {
    await dispatch(deleteColor({ id: d.colorDelteId }));
  };

  const handleAddImage = (e) => {
    const newImage = e.target.files[0];
    setProductData(newImage);
    const reader = new FileReader();
    reader.onload = () => {
      setProductDataView(reader.result);
    };

    reader.readAsDataURL(newImage);
  };

  const handleRemoveImages = () => {
    setProductData('');
  };

  useEffect(() => {
    handleGetColors();
  }, [handleGetColors]);

  return (
    <Container>
      {isLoading || !colors ? (
        <Stack>
          <Skeleton width={320} height={400} />
        </Stack>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={colors}
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
      <Form onSubmit={SubmitColorPost(handleCreateColor)}>
        <CustomTitle variant="h4">Создание цвета</CustomTitle>

        <CustomInput
          {...colorPost('colorCreate', {
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
          placeholder="Введите название цвета"
          fullWidth
          type="text"
        />

        <ErrorMessageBox>
          {errors.colorCreate && (
            <ErrorMessage>{errors.colorCreate.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ImagesContainer>
          <input
            onChange={handleAddImage}
            id="product_colors"
            type="file"
            style={{ display: 'none' }}
          />
          {productData && (
            <ImageBox>
              <img
                src={productDataView}
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
          <AddImages htmlFor="product_colors">
            <AddRounded fontSize="large" />
          </AddImages>
        </ImagesContainer>

        <ButtonSubmit type="submit">Создать цвет</ButtonSubmit>
      </Form>

      <Form onSubmit={SubmitColorUpdate(handleUpdateColor)}>
        <CustomTitle variant="h4">Обновление цвета</CustomTitle>

        <CustomInput
          {...colorUpdate('colorUpdate', {
            required: 'Это поле обязательное!',
            minLength: {
              value: '1',
              message: 'минимальное количество символов: 1',
            },

            maxLength: {
              value: '100',
              message: 'максимальное количество символов: 100',
            },
          })}
          placeholder="Введите название цвета"
          fullWidth
          type="text"
        />

        <CustomInput
          {...colorUpdate('colorUpdateId', {
            required: 'Это поле обязательное!',
          })}
          placeholder="Введите ID цвета"
          fullWidth
          type="number"
        />

        <ErrorMessageBox>
          {errors.colorUpdate && (
            <ErrorMessage>{errors.colorUpdate.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Обновить цвет</ButtonSubmit>
      </Form>
      <Form onSubmit={SubmitColorDelete(handleDeleteColor)}>
        <CustomTitle variant="h4">Удаление цвета</CustomTitle>

        <CustomInput
          {...colorDelete('colorDelteId', {
            required: 'Это поле обязательное!',
            minLength: {
              value: '1',
              message: 'минимальное количество символов: 1',
            },

            maxLength: {
              value: '100',
              message: 'максимальное количество символов: 100',
            },
          })}
          placeholder="Введите ID цвета"
          fullWidth
          type="number"
        />

        <ErrorMessageBox>
          {errors.colorDelteId && (
            <ErrorMessage>{errors.colorDelteId.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Удалить цвет</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default AdminColors;
