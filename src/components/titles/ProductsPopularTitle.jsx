import React from 'react';
import { TitleBox } from './styles';
import { t } from 'i18next';

const ProductsPopularTitle = () => {
  return <TitleBox>{t('titleProductPopular')}</TitleBox>;
};

export default ProductsPopularTitle;
