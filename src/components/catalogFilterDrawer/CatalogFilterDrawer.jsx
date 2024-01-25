import React, { useState } from 'react';
import { FiltersContainer, FiltersTextStyle, SliderBox } from './styles';
import { t } from 'i18next';
import { Accordion, AccordionSummary, Checkbox, Slider } from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { getProducts } from 'reducers/productSlice';

const CatalogFilterDrawer = ({ filterDrawer }) => {
  const [priceValue, setPriceValue] = useState([1000, 50000]);

  const dispatch = useDispatch();

  const filterList = [
    {
      id: 1,
      name: t('filterTitleCategory'),
      value: [
        t('categoryTables'),
        t('categoryChairs'),
        t('categoryArmChairs'),
        t('categorySofas'),
        t('categoryDecor'),
        t('categoryBedding'),
        t('categoryFinishMaterials'),
      ],
    },
    {
      id: 2,
      name: t('filterTitleMaterial'),
      value: ['дуб', 'железо', 'красное дерево', 'лдсп'],
    },
    {
      id: 3,
      name: t('filterTitleColor'),
      value: ['красный', 'берюзовый', 'синий', 'зеленый'],
    },
    {
      id: 4,
      name: t('filterTitleSort'),
      value: ['по возрастанию', 'по убыванию'],
    },
    {
      id: 5,
      name: t('filterTitlePrice'),
      value: 'price',
    },
  ];

  const handleChangePrice = (e, newValue) => {
    setPriceValue(newValue);
  };

  const handlePriceRequest = async () => {
    // await dispatch(
    //   getProducts({
    //     page: 1,
    //     min_price: priceValue[0],
    //     max_price: priceValue[1],
    //     limit: 400,
    //   })
    // );
    // setCurrentPage(1);
  };

  return (
    <FiltersContainer filterDrawer={filterDrawer}>
      {filterList?.map(({ id, name, value }) => (
        <Accordion sx={{ width: '100%' }}>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <FiltersTextStyle key={name} value={name}>
              {name}
            </FiltersTextStyle>
          </AccordionSummary>
          {value === 'price' ? (
            <SliderBox>
              <Slider
                valueLabelDisplay="auto"
                color="warning"
                value={priceValue}
                onChange={handleChangePrice}
                onMouseUp={handlePriceRequest}
                min={1000}
                max={50000}
              />
            </SliderBox>
          ) : (
            value?.map((name, index) => (
              <FiltersTextStyle>
                <Checkbox sx={{ color: '#000' }} color="success" /> {name}
              </FiltersTextStyle>
            ))
          )}
        </Accordion>
      ))}
    </FiltersContainer>
  );
};

export default CatalogFilterDrawer;
