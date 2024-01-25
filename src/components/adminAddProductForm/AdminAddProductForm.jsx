import React, { useState } from 'react';
import {
  AddImages,
  AddProductContainer,
  BoxForFields,
  ButtonSubmit,
  CustomInput,
  CustomTextarea,
  FormAddProduct,
  Image,
  ImagesContainer,
} from './styles';
import {
  IconButton,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Typography,
} from '@mui/material';
import { AddRounded, CloseRounded } from '@mui/icons-material';
import moment from 'moment';

const AdminAddProductForm = () => {
  const [productData, setProductData] = useState();
  const [productImages, setProductImages] = useState([]);
  const [materialImage, setMaterialImage] = useState({ image: '' });
  const [materialData, setMaterialData] = useState({
    id: '',
    name: '',
  });

  const [colorData, setColorData] = useState({
    id: '',
    name: '',
    color: '',
  });
  const [productCategoryValue, setProductCategoryValue] = useState(0);

  const currentDate = moment().format('DD-MM-YYYY');

  const category = [
    {
      id: 1,
      name: 'столы',
    },

    {
      id: 2,
      name: 'стулья',
    },

    {
      id: 3,
      name: 'кресла',
    },

    {
      id: 4,
      name: 'диваны',
    },

    {
      id: 5,
      name: 'декор',
    },

    {
      id: 6,
      name: 'постельное бельё',
    },

    {
      id: 7,
      name: 'отделочные материалы',
    },
  ];

  const subcategory = [
    {
      id: 1,
      name: [
        'мебель1',
        'мебель1',
        'мебель1',
        'мебель1',
        'мебель1',
        'мебель1',
        'мебель1',
      ],
    },

    {
      id: 2,
      name: [
        'мебель2',
        'мебель2',
        'мебель2',
        'мебель2',
        'мебель2',
        'мебель2',
        'мебель2',
      ],
    },
    {
      id: 3,
      name: [
        'мебель3',
        'мебель3',
        'мебель3',
        'мебель3',
        'мебель3',
        'мебель3',
        'мебель3',
      ],
    },
    {
      id: 4,
      name: [
        'мебель4',
        'мебель4',
        'мебель4',
        'мебель4',
        'мебель4',
        'мебель4',
        'мебель4',
      ],
    },

    {
      id: 5,
      name: [
        'мебель5',
        'мебель5',
        'мебель5',
        'мебель5',
        'мебель5',
        'мебель5',
        'мебель5',
      ],
    },

    {
      id: 6,
      name: [
        'мебель6',
        'мебель6',
        'мебель6',
        'мебель6',
        'мебель6',
        'мебель6',
        'мебель6',
      ],
    },

    {
      id: 7,
      name: [
        'мебель7',
        'мебель7',
        'мебель7',
        'мебель7',
        'мебель7',
        'мебель7',
        'мебель7',
      ],
    },
  ];

  const colors = [
    { id: 1, name: 'красный', color: '#ff0000' },
    { id: 2, name: 'синий', color: '#001aff' },
    { id: 3, name: 'берюзовый', color: '#2bd887' },
    { id: 4, name: 'бежевый', color: '#e6b9b9' },
    { id: 5, name: 'черный', color: '#000' },
  ];

  const materials = [
    { id: 1, name: 'дуб', image: '' },
    { id: 2, name: 'железо', image: '' },
    { id: 3, name: 'ЛДСП', image: '' },
    { id: 4, name: 'смешаный', image: '' },
    { id: 5, name: 'красное дерево', image: '' },
  ];

  const handleAddImages = (e) => {
    const images = e.target.files;
    if (images.length > 0) {
      const newImages = Array.from(images).map((image) =>
        URL.createObjectURL(image)
      );
      setProductImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleAddMaterialImage = (e) => {
    const selectimage = e.target.files[0];
    if (selectimage) {
      const newImage = URL.createObjectURL(selectimage);
      setMaterialImage({ image: newImage });
    }
  };

  const handleDeleteImage = (ImageToDelete) => {
    setProductImages((prevImages) =>
      prevImages.filter((image) => ImageToDelete !== image)
    );
  };

  const handleDeleteMaterialData = () => {
    setMaterialImage({ image: '' });
  };

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
      created_at: currentDate,
      updated_at: currentDate,
      photo: productImages || [],
    }));
  };

  console.log(productData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitData = {
      ...productData,
      materials: { ...materialData, ...materialImage },
      colors: colorData,
    };
    console.log('submitData: ', submitData);
    // await dispatch(postProduct())
  };
  return (
    <AddProductContainer>
      <FormAddProduct onSubmit={handleFormSubmit}>
        <CustomInput
          onChange={handleChangeProduct}
          placeholder="Введите название"
          fullWidth
          name="name"
        />
        <CustomTextarea
          maxLength={300}
          minRows={30}
          onChange={handleChangeProduct}
          placeholder="Введите описание обьявления"
          name="descroption"
        />
        <BoxForFields>
          <CustomInput
            onChange={handleChangeProduct}
            fullWidth
            select
            placeholder="Выберите категорию"
            name="category"
          >
            <InputLabel>Выберите категорию товара</InputLabel>

            {category.map(({ id, name }, index) => (
              <MenuItem
                key={id}
                value={name}
                onClick={() => setProductCategoryValue(index)}
              >
                {name}
              </MenuItem>
            ))}
          </CustomInput>

          <CustomInput
            onChange={handleChangeProduct}
            name="subcategory"
            select
            fullWidth
          >
            <InputLabel>Выберите подкатегорию товара</InputLabel>
            {subcategory.map(({ id, name }, index) => {
              if (index === productCategoryValue) {
                return name.map((name) => (
                  <MenuItem key={id} value={name}>
                    {name}
                  </MenuItem>
                ));
              } else {
                return null;
              }
            })}
          </CustomInput>
        </BoxForFields>

        <BoxForFields>
          <CustomInput
            name="height"
            onChange={handleChangeProduct}
            placeholder="Высота"
            type="number"
            required
          />

          <CustomInput
            onChange={handleChangeProduct}
            placeholder="Длинна"
            type="number"
            required
            name="length"
          />

          <CustomInput
            onChange={handleChangeProduct}
            placeholder="глубина"
            type="number"
            required
            name="depth"
          />
        </BoxForFields>

        <ImagesContainer>
          {productImages?.map((file, index) => (
            <Image key={index}>
              <img
                name={file.name}
                src={file}
                alt={file.name}
                key={index}
                width={'80px'}
                height={'80px'}
                loading="lazy"
                style={{ borderRadius: '10px' }}
              />

              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <CloseRounded
                  onClick={() => handleDeleteImage(file)}
                  color="delete"
                  fontSize="large"
                />
              </IconButton>
            </Image>
          ))}
          <AddImages htmlFor="fileInput">
            <AddRounded
              fontSize="large"
              sx={{
                color: 'red',
              }}
            />
          </AddImages>
          <input
            style={{ display: 'none' }}
            id="fileInput"
            type="file"
            multiple
            onChange={handleAddImages}
          />
        </ImagesContainer>

        <CustomInput
          onChange={handleChangeProduct}
          placeholder="Цена продукта"
          type="number"
          name="price"
          required
        />
        <CustomInput
          onChange={handleChangeProduct}
          placeholder="Количество"
          type="number"
          required
          name="quntity"
        />
        <CustomInput
          onChange={handleChangeProduct}
          placeholder="Скидка на продукт"
          type="number"
          required
          name="discount"
        />

        <BoxForFields>
          <CustomInput fullWidth select placeholder="Выберите материал">
            <InputLabel>Выберите материал</InputLabel>

            {materials.map(({ id, name }) => (
              <MenuItem
                key={id}
                value={name}
                onClick={() => setMaterialData({ id: id, name: name })}
              >
                {name}
              </MenuItem>
            ))}
          </CustomInput>

          <ImagesContainer>
            <Image materialImage={materialImage.image}>
              <img
                name={materialData.name}
                src={materialImage.image}
                alt={materialData.name}
                width={'80px'}
                height={'80px'}
                loading="lazy"
                style={{ borderRadius: '10px' }}
              />

              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <CloseRounded
                  onClick={() => handleDeleteMaterialData()}
                  color="delete"
                  fontSize="large"
                />
              </IconButton>
            </Image>
            <AddImages
              style={{ outline: '1px solid #000' }}
              htmlFor="fileInputMaterial"
            >
              <AddRounded
                fontSize="large"
                sx={{
                  color: '#000',
                }}
              />
            </AddImages>
            <input
              style={{ display: 'none' }}
              id="fileInputMaterial"
              type="file"
              multiple
              onChange={handleAddMaterialImage}
            />
          </ImagesContainer>
        </BoxForFields>

        <BoxForFields>
          <CustomInput
            InputLabelProps={{
              style: { display: 'flex' },
            }}
            select
            required
          >
            <InputLabel>Выберите цвет</InputLabel>
            {colors.map(({ id, name, color }) => (
              <MenuItem
                key={id}
                value={name}
                onClick={() =>
                  setColorData({ id: id, name: name, color: color })
                }
              >
                <ListItemIcon>
                  <div
                    style={{
                      backgroundColor: color,
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </ListItemIcon>
                <Typography variant="inherit">{name}</Typography>
              </MenuItem>
            ))}
          </CustomInput>
        </BoxForFields>

        <CustomInput
          onChange={handleChangeProduct}
          placeholder="Артикл"
          type="number"
          name="article"
          required
        />
        <ButtonSubmit type="submit">Создать продукт</ButtonSubmit>
      </FormAddProduct>
    </AddProductContainer>
  );
};

export default AdminAddProductForm;
