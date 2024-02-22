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
  SubcategoriesContainer,
} from './styles';
import { useForm } from 'react-hook-form';
import {
  Breadcrumbs,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { AddRounded, CloseRounded, Done } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'reducers/categorySlice';
import { getSubcategories } from 'reducers/subcategorySlice';
import React, { useCallback, useEffect, useState } from 'react';
import { createProduct } from 'reducers/productSlice';

const AdminAddProductForm = () => {
  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const subcategories =
    useSelector((state) => state.subcategoryReducer.subcategories) || [];

  const colors = useSelector((state) => state.colorReducer.colors) || [];

  const [bindCategories, setBindCategories] = useState();
  const [colorVisibility, setColorVisibility] = useState(false);
  const [productData, setProductData] = useState({
    productImages: [],
    productColors: [],
    productSubcategories: {
      values: [],
      ids: [],
    },
  });
  console.log(productData.productSubcategories);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const variantInStock = [
    { name: 'да', value: true },
    { name: 'нет', value: false },
  ];

  const handleGetAllCategories = useCallback(async () => {
    await dispatch(getCategories());
    await dispatch(getSubcategories());
  }, [dispatch]);

  const handleChangeCategories = (id, name) => () => {
    setBindCategories(id);
  };

  const handleChangeSubcategory = (e) => {
    const { value } = e.target;
    const newSubcategory = value.name;
    const idSubcategory = value.id;

    if (
      !productData.productSubcategories.values.includes(newSubcategory) &&
      !productData.productSubcategories.ids.includes(idSubcategory)
    ) {
      setProductData((prevValue) => ({
        ...prevValue,
        productSubcategories: {
          values: [...prevValue.productSubcategories.values, newSubcategory],
          ids: [...prevValue.productSubcategories.ids, idSubcategory],
        },
      }));
    }
  };

  const handleBreadcrumbsDelete = (valueToDelete, idToDelte) => {
    setProductData((prevData) => {
      if (prevData && prevData.productSubcategories) {
        return {
          ...prevData,
          productSubcategories: {
            values: prevData.productSubcategories.values.filter(
              (data) => data.toLowerCase() !== valueToDelete.toLowerCase()
            ),
            ids: prevData.productSubcategories.ids.filter(
              (id) => id !== idToDelte
            ),
          },
        };
      } else {
        setProductData((prevTags) => ({
          productSubcategories: prevTags.productSubcategories.values.filter(
            (tag) => tag.toLowerCase() !== valueToDelete.toLowerCase()
          ),
        }));
      }
      return prevData;
    });
  };

  const handleAddImages = (e) => {
    const images = e.target.files;
    if (images.length > 0) {
      const newImages = Array.from(images).map((file) =>
        URL.createObjectURL(file)
      );
      setProductData((prevData) => ({
        ...prevData,
        productImages: [...prevData.productImages, ...newImages],
      }));
    }
  };

  const handleRemoveImages = (ImageToDelete) => {
    setProductData((prevData) => ({
      ...prevData,
      productImages: prevData.productImages.filter(
        (image) => ImageToDelete !== image
      ),
    }));
  };

  const handleAddImagesColors = (e) => {
    const images = e.target.files;
    if (images.length > 0) {
      const newImages = Array.from(images).map((file) =>
        URL.createObjectURL(file)
      );
      setProductData((prevData) => ({
        ...prevData,
        productColors: [...prevData.productColors, ...newImages],
      }));
    }
  };

  const handleRemoveImagesColors = (ImageToDelete) => {
    setProductData((prevData) => ({
      ...prevData,
      productColors: prevData.productColors.filter(
        (image) => ImageToDelete !== image
      ),
    }));
  };

  const handleSelectedColors = (id) => {
    setProductData((prevData) => ({
      ...prevData,
      productColors: [...prevData.productColors, id],
    }));
  };

  const onSubmit = async (data) => {
    const newProductData = {
      ...data,
      ...productData,
      categoryId: bindCategories,
    };
    await dispatch(createProduct({ data: newProductData }));
  };

  useEffect(() => {
    handleGetAllCategories();
  }, [handleGetAllCategories]);

  const variantProductClass = ['стандарт', 'премиум', 'vip', 'уникальное'];

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CustomTitle variant="h4">Создание товара</CustomTitle>

        <CustomInput
          type="text"
          fullWidth
          placeholder="Введите название товара"
          {...register('title', {
            required: 'Это поле обязательное!',
            minLength: {
              value: 1,
              message: 'Минимальное количество символов: 1',
            },

            maxLength: {
              value: '255',
              message: 'Максимальное количество символов: 255',
            },
          })}
        />

        <ErrorMessageBox>
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </ErrorMessageBox>

        <CustomInput
          type="text"
          multiline
          rows={20}
          fullWidth
          placeholder="Введите описание товара"
          {...register('description', {
            required: 'Это поле обязательное',
            minLength: {
              value: 1,
              message: 'Минимальное количество символов: 1',
            },
          })}
        />

        <ErrorMessageBox>
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <CustomInput
          type="number"
          fullWidth
          placeholder="цена товара"
          {...register('price')}
        />

        <CustomInput
          type="number"
          fullWidth
          placeholder="скидка на товар (в процентах)"
          {...register('discount', {
            required: 'Это поле обязательное',
            minLength: {
              value: 1,
              message: 'Минимальное количество символов: 1',
            },
          })}
        />

        <ErrorMessageBox>
          {errors.discount && (
            <ErrorMessage>{errors.discount.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <FormControl fullWidth>
          <InputLabel id="in_stock_select">В наличии</InputLabel>
          <Select
            labelId="in_stock_select"
            {...register('in_stock', {
              required: 'Это поле обязательное',
            })}
          >
            {variantInStock?.map(({ name, value }, index) => (
              <MenuItem key={index} value={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <ErrorMessageBox>
          {errors.in_stock && (
            <ErrorMessage>{errors.in_stock.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        <FormControl fullWidth>
          <InputLabel id="product_class_select">
            Классификация товара
          </InputLabel>
          <Select
            labelId="product_class_select"
            {...register('product_class', {
              required: 'Это поле обязательное',
            })}
          >
            {variantProductClass.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <ErrorMessageBox>
          {errors.product_class && (
            <ErrorMessage>{errors.product_class.message}</ErrorMessage>
          )}
        </ErrorMessageBox>

        {/* <InputLabel>Выберите изображения товара</InputLabel> */}

        {/* <ImagesContainer>
          <input
            onChange={handleAddImages}
            id="product_images"
            type="file"
            multiple
            style={{ display: 'none' }}
          />
          {productData.productImages?.map((image, index) => (
            <ImageBox key={index}>
              <img
                name={image.name}
                key={index}
                src={image}
                alt={image.name}
                width={'80px'}
                height={'80px'}
                style={{
                  borderRadius: '5px',
                }}
              />

              <IconButton
                onClick={() => handleRemoveImages(image)}
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
          ))}

          <AddImages htmlFor="product_images">
            <AddRounded fontSize="large" />
          </AddImages>
        </ImagesContainer> */}

        {categories.length > 0 && subcategories.length > 0 && (
          <>
            <FormControl fullWidth>
              <InputLabel id="categories_select">
                Выберите категорию товара
              </InputLabel>
              <Select
                labelId="categories_select"
                {...register('category', {
                  required: 'Это поле обязательное',
                })}
              >
                {categories?.map(({ id, name }) => (
                  <MenuItem
                    onClick={handleChangeCategories(id, name)}
                    key={id}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <ErrorMessageBox>
              {errors.category && (
                <ErrorMessage>{errors.category.message}</ErrorMessage>
              )}
            </ErrorMessageBox>

            <FormControl fullWidth>
              <InputLabel id="subcategories_select">
                Выберите подкатегорию товара
              </InputLabel>

              <Select
                required
                labelId="subcategories_select"
                onChange={handleChangeSubcategory}
              >
                {subcategories
                  ?.filter(
                    (subcategory) => subcategory.category === bindCategories
                  )
                  .map(({ id: subId, name: subName }) => (
                    <MenuItem key={subId} value={{ id: subId, name: subName }}>
                      {subName}
                    </MenuItem>
                  ))}
              </Select>

              <SubcategoriesContainer>
                <Breadcrumbs aria-label="breadcrumb">
                  {productData.productSubcategories.values?.map(
                    (subcategorySelected, index) => {
                      const id = productData.productSubcategories.ids?.[index];
                      return (
                        <Chip
                          key={id}
                          label={subcategorySelected}
                          onDelete={() =>
                            handleBreadcrumbsDelete(subcategorySelected, id)
                          }
                          sx={{ margin: '5px' }}
                        />
                      );
                    }
                  )}
                </Breadcrumbs>
              </SubcategoriesContainer>
            </FormControl>
          </>
        )}

        <InputLabel>Выберите цвет или материал товара</InputLabel>

        {colors?.map(({ id, name, image }) => (
          <ImageBox onClick={() => handleSelectedColors(id)}>
            {colorVisibility ? <Done /> : <></>}
          </ImageBox>
        ))}

        {/* <ImagesContainer>
          <input
            onChange={handleAddImagesColors}
            id="product_colors_images"
            type="file"
            multiple
            style={{ display: 'none' }}
          />
          {productData.productColors?.map((image, index) => (
            <ImageBox key={index}>
              <img
                name={image.name}
                key={index}
                src={image}
                alt={image.name}
                width={'80px'}
                height={'80px'}
                style={{
                  borderRadius: '5px',
                }}
              />

              <IconButton
                onClick={() => handleRemoveImagesColors(image)}
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
          ))}

          <AddImages htmlFor="product_colors_images">
            <AddRounded fontSize="large" />
          </AddImages>
        </ImagesContainer> */}

        <ButtonSubmit type="submit">Создать товар</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default AdminAddProductForm;
