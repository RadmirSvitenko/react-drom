import React, { useCallback, useEffect, useState } from 'react';
import {
  ButtonReset,
  FiltersContainer,
  FiltersSelectedButton,
  FiltersTextStyle,
  SliderBox,
} from './styles';
import { t } from 'i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Slider,
} from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';
import { getCategories } from 'reducers/categorySlice';
import { getSubcategories } from 'reducers/subcategorySlice';
import { getColors } from 'reducers/colorsSlice';

const CatalogFilterDrawer = ({ filterDrawer, isLoading }) => {
  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];
  const subcategories =
    useSelector((state) => state.subcategoryReducer.subcategories) || [];
  const colors = useSelector((state) => state.colorReducer.colors) || [];

  const [priceValue, setPriceValue] = useState([1, 100000]);
  const [filtersData, setFiltersData] = useState({});
  const [filtersChecked, setFiltersChecked] = useState({});

  const dispatch = useDispatch();

  const filterList = [
    {
      listName: t('titleCategories'),
      filterName: 'category',
      array: categories,
    },
    {
      listName: t('titleSubcategories'),
      filterName: 'subcategory',
      array: subcategories,
    },
    {
      listName: t('filterTitleColor'),
      filterName: 'colors',
      array: colors,
    },
    { listName: t('filterTitlePrice'), array: [] },
  ];

  const handleChangePrice = async (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleFiltersReset = async () => {
    await dispatch(getProducts({ category: '' }));
    setFiltersChecked({});
    setFiltersData({});
    window.location.reload();
  };

  const handleFiltersChange = async (event, valueName) => {
    const { name, checked, value } = event.target;

    const currentCategoryValues = filtersData[name] || [];

    let updatedCategoryValues;
    if (checked) {
      updatedCategoryValues = [...currentCategoryValues, value];
    } else {
      updatedCategoryValues = currentCategoryValues.filter(
        (category) => category !== value
      );
    }

    const updatedFiltersData = {
      ...filtersData,
      [name]: updatedCategoryValues,
      min_price: priceValue[0],
      max_price: priceValue[1],
    };

    await setFiltersData(updatedFiltersData);
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getProducts(filtersData));
    };

    fetchData();
  }, [filtersData, dispatch]);

  const handleGetProductData = useCallback(async () => {
    await dispatch(getCategories());
    await dispatch(getSubcategories());
    await dispatch(getColors());
  }, [dispatch]);

  useEffect(() => {
    handleGetProductData();
  }, [handleGetProductData]);

  return (
    <FiltersContainer filterDrawer={filterDrawer}>
      {filterList?.map(({ listName, filterName, array }, index) => (
        <Accordion key={index} sx={{ width: '100%' }}>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <FiltersTextStyle value={listName}>{listName}</FiltersTextStyle>
          </AccordionSummary>

          {array?.map((value, index) => (
            <FiltersTextStyle key={index}>
              <Checkbox
                checked={
                  filtersChecked?.category?.includes(filterName) &&
                  filtersChecked?.name === value.name
                }
                name={filterName}
                value={value.id}
                onChange={(e) => handleFiltersChange(e, value.name)}
                color="success"
              />
              {value.name}
            </FiltersTextStyle>
          ))}

          {listName === t('filterTitlePrice') && (
            <AccordionDetails>
              <SliderBox>
                <Slider
                  valueLabelDisplay="auto"
                  color="warning"
                  value={priceValue}
                  onChange={handleChangePrice}
                  onMouseUp={handleFiltersChange}
                  min={1000}
                  max={100000}
                />
              </SliderBox>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
      <Accordion
        sx={{
          width: '100%',
        }}
        expandIcon={<ExpandMoreRounded />}
      >
        <ButtonReset onClick={() => handleFiltersReset()} fullWidth>
          {t('filterTitleReset')}
        </ButtonReset>
      </Accordion>
    </FiltersContainer>
  );
};

export default CatalogFilterDrawer;
