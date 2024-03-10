import React, { useCallback, useEffect } from 'react';
import {
  ButtonSubmit,
  Container,
  CustomInput,
  CustomTitle,
  ErrorMessage,
  ErrorMessageBox,
  Form,
} from './styles';
import { Skeleton, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  createSubcategory,
  deleteSubcategory,
  getSubcategories,
  updateSubcategory,
} from 'reducers/subcategorySlice';
import { DataGrid } from '@mui/x-data-grid';
import { toUpPage } from 'globalFunction';
import theme from 'theme';

const AdminSubcategory = () => {
  const subcategories =
    useSelector((state) => state.subcategoryReducer.subcategories) || [];
  const isLoading = useSelector((state) => state.subcategoryReducer.isLoading);

  const cols = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: '250',
    },
  ];

  const { register: subcategoryPost, handleSubmit: SubmitSubcategoryPost } =
    useForm();

  const { register: subcategoryUpdate, handleSubmit: SubmitSubcategoryUpdate } =
    useForm();

  const { register: subcategoryDelete, handleSubmit: SubmitSubcategoryDelete } =
    useForm();

  const {
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleCreateCategory = async (d) => {
    await dispatch(
      createSubcategory({
        data: d.subcategoryCreate,
        category: d.subcategoryCreateWithCatagory,
      })
    );
  };

  const handleGetSubcategories = useCallback(async () => {
    await dispatch(getSubcategories());
    toUpPage();
  }, [dispatch]);

  const handleUpdateSubcategory = async (d) => {
    await dispatch(
      updateSubcategory({
        data: d.subcategoryUpdate,
        id: d.subcategoryUpdateId,
        categoryId: d.subcategoryUpdateIdCategory,
      })
    );
  };

  const handleDeleteSubcategory = async (d) => {
    await dispatch(deleteSubcategory({ id: d.subcategoryDelteId }));
  };

  useEffect(() => {
    handleGetSubcategories();
  }, [handleGetSubcategories]);

  return (
    <Container>
      {isLoading || !subcategories ? (
        <Stack>
          <Skeleton width={320} height={400} />
        </Stack>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={subcategories}
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
            autoPageSize
          />
        </div>
      )}
      <Form onSubmit={SubmitSubcategoryPost(handleCreateCategory)}>
        <CustomTitle variant="h4">Создание подкатегории</CustomTitle>
        {/* Bamboo Charcoal Wood Veneer */}
        <CustomInput
          {...subcategoryPost('subcategoryCreate', {
            required: 'Это поле обязательное!',
            minLength: {
              value: '1',
              message: 'минимальное количество символов: 1',
            },

            maxLength: {
              value: '100',
              message: 'максимальное количество символов: 255',
            },
          })}
          placeholder="Введите название подкатегории"
          fullWidth
          type="text"
        />

        <CustomInput
          {...subcategoryPost('subcategoryCreateWithCatagory', {
            required: 'Это поле обязательное!',
            minLength: {
              value: '1',
              message: 'минимальное количество символов: 1',
            },

            maxLength: {
              value: '100',
              message: 'максимальное количество символов: 255',
            },
          })}
          placeholder="Введите ID категории для связки"
          fullWidth
          type="number"
        />
        <ErrorMessageBox>
          {errors.subcategoryCreate && (
            <ErrorMessage>{errors.subcategoryCreate.message}</ErrorMessage>
          )}
        </ErrorMessageBox>
        <ButtonSubmit type="submit">Создать подкатегорию</ButtonSubmit>
      </Form>

      <Form onSubmit={SubmitSubcategoryUpdate(handleUpdateSubcategory)}>
        <CustomTitle variant="h4">Обновление подкатегории</CustomTitle>

        <CustomInput
          {...subcategoryUpdate('subcategoryUpdate', {
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
          placeholder="Введите название подкатегории"
          fullWidth
          type="text"
        />

        <CustomInput
          {...subcategoryUpdate('subcategoryUpdateId', {
            required: 'Это поле обязательное!',
          })}
          placeholder="Введите ID подкатегории"
          fullWidth
          type="number"
        />

        <CustomInput
          {...subcategoryUpdate('subcategoryUpdateIdCategory', {
            required: 'Это поле обязательное!',
          })}
          placeholder="Введите ID категории для связки"
          fullWidth
          type="number"
        />

        <ErrorMessageBox>
          {errors.subcategoryUpdate && (
            <ErrorMessage>{errors.subcategoryUpdate.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Обновить подкатегорию</ButtonSubmit>
      </Form>

      <Form onSubmit={SubmitSubcategoryDelete(handleDeleteSubcategory)}>
        <CustomTitle variant="h4">Удаление подкатегории</CustomTitle>

        <CustomInput
          {...subcategoryDelete('subcategoryDelteId', {
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
          placeholder="Введите ID подкатегории"
          fullWidth
          type="number"
        />

        <ErrorMessageBox>
          {errors.subcategoryDelteId && (
            <ErrorMessage>{errors.subcategoryDelteId.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Удалить подкатегорию</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default AdminSubcategory;
