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
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from 'reducers/categorySlice';
import { DataGrid } from '@mui/x-data-grid';
import { toUpPage } from 'globalFunction';
import theme from 'theme';

const AdminCategory = () => {
  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];
  const isLoading = useSelector((state) => state.categoryReducer.isLoading);

  const cols = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: '250',
    },
  ];

  const { register: categoryPost, handleSubmit: SubmitCategoryPost } =
    useForm();

  const { register: categoryUpdate, handleSubmit: SubmitCategoryUpdate } =
    useForm();

  const { register: categoryDelete, handleSubmit: SubmitCategoryDelete } =
    useForm();

  const {
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleCreateCategory = async (d) => {
    await dispatch(createCategory({ data: d.categoryCreate }));
  };

  const handleGetCategories = useCallback(async () => {
    await dispatch(getCategories());
    toUpPage();
  }, [dispatch]);

  const handleUpdateCategory = async (d) => {
    console.log(d);
    await dispatch(
      updateCategory({ data: d.categoryUpdate, id: d.categoryUpdateId })
    );
  };

  const handleDeleteCategory = async (d) => {
    await dispatch(deleteCategory({ id: d.categoryDelteId }));
  };

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  return (
    <Container>
      {isLoading || !categories ? (
        <Stack>
          <Skeleton width={320} height={400} />
        </Stack>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={categories}
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
      <Form onSubmit={SubmitCategoryPost(handleCreateCategory)}>
        <CustomTitle variant="h4">Создание категории</CustomTitle>

        <CustomInput
          {...categoryPost('categoryCreate', {
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
          {errors.categoryCreate && (
            <ErrorMessage>{errors.categoryCreate.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Создать категорию</ButtonSubmit>
      </Form>
      <Form onSubmit={SubmitCategoryUpdate(handleUpdateCategory)}>
        <CustomTitle variant="h4">Обновление категории</CustomTitle>

        <CustomInput
          {...categoryUpdate('categoryUpdate', {
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
          placeholder="Введите название категории"
          fullWidth
          type="text"
        />

        <CustomInput
          {...categoryUpdate('categoryUpdateId', {
            required: 'Это поле обязательное!',
          })}
          placeholder="Введите ID категории"
          fullWidth
          type="number"
        />

        <ErrorMessageBox>
          {errors.categoryUpdate && (
            <ErrorMessage>{errors.categoryUpdate.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Обновить категорию</ButtonSubmit>
      </Form>
      <Form onSubmit={SubmitCategoryDelete(handleDeleteCategory)}>
        <CustomTitle variant="h4">Удалить категорию </CustomTitle>

        <CustomInput
          {...categoryDelete('categoryDelteId', {
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
          placeholder="Введите ID категории"
          fullWidth
          type="number"
        />

        <ErrorMessageBox>
          {errors.categoryDelteId && (
            <ErrorMessage>{errors.categoryDelteId.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <ButtonSubmit type="submit">Удалить категорию</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default AdminCategory;
