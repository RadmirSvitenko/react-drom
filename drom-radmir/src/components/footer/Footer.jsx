import React, { useCallback, useEffect } from 'react';
import {
  FooterContainer,
  FooterContentBox,
  FooterContentText,
  FooterContentTitle,
  FooterIconBox,
} from './styles';

import WhatsAppIcon from 'assets/images/whatsapp-logo.png';
import InstagramIcon from 'assets/images/instagram-logo.png';
import logotype from 'assets/images/logotype.png';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Authentication from 'components/authentication/Authentication';
import { getTokenFromCookies } from 'cookies';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'reducers/categorySlice';
import { getSubcategories } from 'reducers/subcategorySlice';
import { getProducts } from 'reducers/productSlice';
import { Box } from '@mui/material';

const Footer = ({
  authSwitch,
  toggleAuthSwitch,
  openModalAuth,
  toggleModalAuth,
}) => {
  const TOKEN = getTokenFromCookies();

  const categories =
    useSelector((state) => state.categoryReducer.categories) || [];

  const subcategories =
    useSelector((state) => state.subcategoryReducer.subcategories) || [];

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFooterPages = (page) => {
    navigate(`/${page}`);
  };

  const toggleAuthButton = (value) => {
    toggleAuthSwitch(value);
    toggleModalAuth();
  };

  const toCatalog = (name, id) => {
    navigate(`/catalog/${name}/${id}`);
  };

  const handleGetAllCategories = useCallback(async () => {
    await dispatch(getCategories());
    await dispatch(getSubcategories());
  }, [dispatch]);

  useEffect(() => {
    handleGetAllCategories();
  }, [handleGetAllCategories]);

  return (
    <FooterContainer>
      <FooterContentBox>
        <FooterContentTitle>{t('titleCategories')}</FooterContentTitle>
        {categories?.map(({ id, name }) => (
          <FooterContentText key={id} onClick={() => toCatalog('category', id)}>
            {name}
          </FooterContentText>
        ))}
      </FooterContentBox>

      <FooterContentBox sx={{ gap: '50px' }}>
        <Box>
          <FooterContentTitle>{t('titleCompany')}</FooterContentTitle>

          <FooterContentText onClick={() => handleFooterPages('about-us')}>
            {t('footerAbouUS')}
          </FooterContentText>

          <FooterContentText onClick={() => handleFooterPages('contacts')}>
            {t('footerContacts')}
          </FooterContentText>
        </Box>

        <FooterIconBox>
          <a href="https://wa.me/996553232354">
            <img width={'30px'} src={WhatsAppIcon} alt="Drom whatsapp" />
          </a>
          <a href="https://www.instagram.com/micasakg/">
            <img width={'30px'} src={InstagramIcon} alt="Drom instagram" />
          </a>
        </FooterIconBox>
      </FooterContentBox>

      <FooterContentBox>
        <FooterContentTitle>{t('titleSubcategories')}</FooterContentTitle>
        {subcategories?.map(({ id, name }) => (
          <FooterContentText
            key={id}
            onClick={() => toCatalog('subcategory', id)}
          >
            {name}
          </FooterContentText>
        ))}
      </FooterContentBox>

      {TOKEN ? (
        <FooterContentBox>
          <FooterContentTitle>{t('titleAccount')}</FooterContentTitle>
          <p>Вы уже авторизованны!</p>
        </FooterContentBox>
      ) : !TOKEN || TOKEN === 'undefined' ? (
        <FooterContentBox>
          <FooterContentTitle>{t('titleAccount')}</FooterContentTitle>
          <FooterContentText onClick={() => toggleAuthButton(true)}>
            {t('footerSignIn')}
          </FooterContentText>
          <FooterContentText onClick={() => toggleAuthButton(false)}>
            {t('footerRegister')}
          </FooterContentText>
        </FooterContentBox>
      ) : (
        false
      )}

      <Authentication
        open={openModalAuth}
        onClose={toggleModalAuth}
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
      />

      <hr style={{ border: '1px solid #BFBAB6', width: '80%' }} />
      <Box width={'100%'} display={'flex'} justifyContent={'center'}>
        <img src={logotype} alt="logotype" width={'100px'} />
      </Box>
    </FooterContainer>
  );
};

export default Footer;
