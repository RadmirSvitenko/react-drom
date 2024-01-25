import React from "react";
import {
  FooterContainer,
  FooterContentBox,
  FooterContentText,
  FooterContentTitle,
  FooterIconBox,
} from "./styles";

import WhatsAppIcon from "assets/images/icons8-whatsapp.svg";
import InstagramIcon from "assets/images/icons8-instagram.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Authentication from "components/authentication/Authentication";

const Footer = ({
  authSwitch,
  toggleAuthSwitch,
  openModalAuth,
  toggleModalAuth,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFooterPages = (page) => {
    navigate(`/${page}`);
  };

  const toggleAuthButton = (value) => {
    toggleAuthSwitch(value);
    toggleModalAuth();
  };

  return (
    <FooterContainer>
      <FooterContentBox>
        <FooterContentTitle>{t("footerAboutUsOurStory")}</FooterContentTitle>

        <FooterContentText onClick={() => handleFooterPages("our-story")}>
          {t("footerAboutUsOurStory")}
        </FooterContentText>
        <FooterContentText onClick={() => handleFooterPages("reviews")}>
          {t("footerReviews")}
        </FooterContentText>
        <FooterContentText onClick={() => handleFooterPages("contacts")}>
          {t("footerContacts")}
        </FooterContentText>
      </FooterContentBox>

      <FooterContentBox>
        <FooterContentTitle>{t("footerCategories")}</FooterContentTitle>
        <FooterContentText>{t("categoryTables")}</FooterContentText>
        <FooterContentText>{t("categoryChairs")}</FooterContentText>
        <FooterContentText>{t("categoryArmChairs")}</FooterContentText>
        <FooterContentText>{t("categorySofas")}</FooterContentText>
        <FooterContentText>{t("categoryDecor")}</FooterContentText>
        <FooterContentText>{t("categoryBedding")}</FooterContentText>
        <FooterContentText>{t("categoryFinishMaterials")}</FooterContentText>
      </FooterContentBox>

      <FooterContentBox>
        <FooterContentTitle>{t("footerAccount")}</FooterContentTitle>
        <FooterContentText onClick={() => toggleAuthButton(true)}>
          {t("footerSignIn")}
        </FooterContentText>
        <FooterContentText onClick={() => toggleAuthButton(false)}>
          {t("footerRegister")}
        </FooterContentText>
        <FooterIconBox>
          <a href="https://wa.me/996553232354">
            <img width={"40px"} src={WhatsAppIcon} alt="Drom whatsapp" />
          </a>
          <a href="https://www.instagram.com/micasakg/">
            <img width={"40px"} src={InstagramIcon} alt="Drom instagram" />
          </a>
        </FooterIconBox>
      </FooterContentBox>

      <FooterContentBox>
        <FooterContentTitle>B2B</FooterContentTitle>
        <FooterContentText>{t("footerDesigners")}</FooterContentText>
        <FooterContentText>{t("footerWholeSellers")}</FooterContentText>
      </FooterContentBox>

      <Authentication
        open={openModalAuth}
        onClose={toggleModalAuth}
        authSwitch={authSwitch}
        toggleAuthSwitch={toggleAuthSwitch}
      />
    </FooterContainer>
  );
};

export default Footer;
