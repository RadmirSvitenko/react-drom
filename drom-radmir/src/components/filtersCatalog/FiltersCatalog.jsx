import React, { useState } from 'react';
import {
  CustomButtonResetFilters,
  CustomDivider,
  CustomSlider,
  FilterPriceBox,
  FiltersCatalogBox,
  FiltersCatalogColorSection,
  FiltersCatalogContainer,
  FiltersCatalogList,
  FiltersCatalogListTitle,
  FiltersCatalogSection,
  FiltersColorBox,
} from './styles';
import { t } from 'i18next';
import { getProducts } from 'reducers/productSlice';
import { useDispatch } from 'react-redux';
import { Check } from '@mui/icons-material';

const FiltersCatalog = () => {
  const [filterPriceValue, setFilterPriceValue] = useState([3000, 100000]);
  const [visibilityFilterCategory, setVisibilityFilterCategory] = useState({
    tables: false,
    chairs: false,
    armChairs: false,
    sofas: false,
    decor: false,
    bedding: false,
    finishMaterials: false,
  });

  const [visibilityFilterMaterials, setVisibilityFilterMaterials] = useState({
    materialOne: false,
    materialTwo: false,
    materialThree: false,
    materialFour: false,
    materialFive: false,
  });

  const [visibilityFilterColor, setVisibilityFilterColor] = useState({
    colorGreen: false,
    colorYellow: false,
    colorRed: false,
  });

  const dispatch = useDispatch();

  const handleChangeVisivilitySection = (section) => {
    switch (section) {
      case 'tables': {
        setVisibilityFilterCategory({
          tables: true,
        });
        break;
      }

      case 'chairs': {
        setVisibilityFilterCategory({
          chairs: true,
        });
        break;
      }

      case 'armChairs': {
        setVisibilityFilterCategory({
          armChairs: true,
        });
        break;
      }

      case 'sofas': {
        setVisibilityFilterCategory({
          sofas: true,
        });
        break;
      }

      case 'decor': {
        setVisibilityFilterCategory({
          decor: true,
        });
        break;
      }

      case 'bedding': {
        setVisibilityFilterCategory({
          bedding: true,
        });
        break;
      }

      case 'finishMaterials': {
        setVisibilityFilterCategory({
          finishMaterials: true,
        });
        break;
      }

      case 'materialOne': {
        setVisibilityFilterMaterials({
          materialOne: true,
        });
        break;
      }

      case 'materialTwo': {
        setVisibilityFilterMaterials({
          materialTwo: true,
        });
        break;
      }

      case 'materialThree': {
        setVisibilityFilterMaterials({
          materialThree: true,
        });
        break;
      }

      case 'materialFour': {
        setVisibilityFilterMaterials({
          materialFour: true,
        });
        break;
      }

      case 'materialFive': {
        setVisibilityFilterMaterials({
          materialFive: true,
        });
        break;
      }

      case 'colorGreen': {
        setVisibilityFilterColor({
          colorGreen: true,
        });
        break;
      }

      case 'colorYellow': {
        setVisibilityFilterColor({
          colorYellow: true,
        });
        break;
      }

      case 'colorRed': {
        setVisibilityFilterColor({
          colorRed: true,
        });
        break;
      }

      default:
        handleFilterReset();
    }
  };

  const handleFilterReset = () => {
    setVisibilityFilterCategory({
      tables: false,
      chairs: false,
      armChairs: false,
      sofas: false,
      decor: false,
      bedding: false,
      finishMaterials: false,
    });

    setVisibilityFilterMaterials({
      materialOne: false,
      materialTwo: false,
      materialThree: false,
      materialFour: false,
      materialFive: false,
    });

    setVisibilityFilterColor({
      colorGreen: false,
      colorYellow: false,
      colorRed: false,
    });

    setFilterPriceValue([3000, 100000]);
  };

  const handleChangeFilterPriceRequest = async () => {
    await dispatch(
      getProducts({
        page: 1,
        min_price: filterPriceValue[0],
        max_price: filterPriceValue[1],
      })
    );
  };

  const handleChangeFilterPrice = (e, value) => {
    setFilterPriceValue(value);
  };

  return (
    <FiltersCatalogContainer>
      <FiltersCatalogBox>
        <FiltersCatalogList>
          <FiltersCatalogListTitle>
            {t('filterTitleCategory')}
          </FiltersCatalogListTitle>

          <CustomDivider />

          <FiltersCatalogSection
            visibility={visibilityFilterCategory.tables}
            onClick={() => handleChangeVisivilitySection('tables')}
          >
            {t('categoryTables')}
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterCategory.chairs}
            onClick={() => handleChangeVisivilitySection('chairs')}
          >
            {t('categoryChairs')}
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterCategory.armChairs}
            onClick={() => handleChangeVisivilitySection('armChairs')}
          >
            {t('categoryArmChairs')}
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterCategory.sofas}
            onClick={() => handleChangeVisivilitySection('sofas')}
          >
            {t('categorySofas')}
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterCategory.decor}
            onClick={() => handleChangeVisivilitySection('decor')}
          >
            {t('categoryDecor')}
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterCategory.bedding}
            onClick={() => handleChangeVisivilitySection('bedding')}
          >
            {t('categoryBedding')}
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterCategory.finishMaterials}
            onClick={() => handleChangeVisivilitySection('finishMaterials')}
          >
            {t('categoryFinishMaterials')}
          </FiltersCatalogSection>
        </FiltersCatalogList>
      </FiltersCatalogBox>

      <FiltersCatalogBox>
        <FiltersCatalogList>
          <FiltersCatalogListTitle>
            {t('filterTitleMaterial')}
          </FiltersCatalogListTitle>

          <CustomDivider />

          <FiltersCatalogSection
            visibility={visibilityFilterMaterials.materialOne}
            onClick={() => handleChangeVisivilitySection('materialOne')}
          >
            ЛДСП
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterMaterials.materialTwo}
            onClick={() => handleChangeVisivilitySection('materialTwo')}
          >
            Дуб
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterMaterials.materialThree}
            onClick={() => handleChangeVisivilitySection('materialThree')}
          >
            Сосна
          </FiltersCatalogSection>
          <FiltersCatalogSection
            visibility={visibilityFilterMaterials.materialFour}
            onClick={() => handleChangeVisivilitySection('materialFour')}
          >
            Металл
          </FiltersCatalogSection>

          <FiltersCatalogSection
            visibility={visibilityFilterMaterials.materialFive}
            onClick={() => handleChangeVisivilitySection('materialFive')}
          >
            {t('categoryFinishMaterials')}
          </FiltersCatalogSection>
        </FiltersCatalogList>
      </FiltersCatalogBox>

      <FiltersColorBox>
        <FiltersCatalogListTitle>
          {t('filterTitleColor')}
        </FiltersCatalogListTitle>

        <CustomDivider />

        <FiltersCatalogColorSection
          onClick={() => handleChangeVisivilitySection('colorGreen')}
          sx={{
            background: 'green',
          }}
        >
          {visibilityFilterColor.colorGreen ? <Check /> : <></>}
        </FiltersCatalogColorSection>

        <FiltersCatalogColorSection
          onClick={() => handleChangeVisivilitySection('colorYellow')}
          sx={{
            background: 'yellow',
          }}
        >
          {visibilityFilterColor.colorYellow ? <Check /> : <></>}
        </FiltersCatalogColorSection>

        <FiltersCatalogColorSection
          onClick={() => handleChangeVisivilitySection('colorRed')}
          sx={{
            background: 'red',
          }}
        >
          {visibilityFilterColor.colorRed ? <Check /> : <></>}
        </FiltersCatalogColorSection>
      </FiltersColorBox>

      <FilterPriceBox>
        <FiltersCatalogListTitle>
          {t('filterTitlePrice')}
        </FiltersCatalogListTitle>

        <CustomDivider />

        <CustomSlider
          aria-label="Filter Price"
          value={filterPriceValue}
          onChange={handleChangeFilterPrice}
          onMouseUp={handleChangeFilterPriceRequest}
          valueLabelDisplay="auto"
          min={5000}
          max={100000}
        />
      </FilterPriceBox>

      <CustomButtonResetFilters onClick={() => handleFilterReset()}>
        Сбросить
      </CustomButtonResetFilters>
    </FiltersCatalogContainer>
  );
};

export default FiltersCatalog;
