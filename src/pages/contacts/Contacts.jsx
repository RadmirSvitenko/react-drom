import React from 'react';
import {
  ContactsPageContainer,
  ContactsPageInfoBox,
  ContactsPageMapBox,
  ContactsPageText,
} from './styles';

const Contacts = () => {
  return (
    <ContactsPageContainer>
      <ContactsPageInfoBox>
        <ContactsPageText>Телефон: 0703305020; 0553847454</ContactsPageText>
        <ContactsPageText>Аддрес: Юнусалиева,89</ContactsPageText>
        <ContactsPageText>
          График работы: Пн-Сб 10:00-19:00; Вс 10:00-18:00
        </ContactsPageText>
      </ContactsPageInfoBox>

      <ContactsPageMapBox></ContactsPageMapBox>
    </ContactsPageContainer>
  );
};

export default Contacts;
