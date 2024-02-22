import React from 'react';
import { CategoryCardContainer, CategoryTitle } from './styles';
const CategoryCard = ({ section }) => {
  return (
    <CategoryCardContainer>
      <img
        width={'250px'}
        height={'250px'}
        src={section.image}
        alt={section.title}
      />
      <CategoryTitle>{section.title}</CategoryTitle>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
