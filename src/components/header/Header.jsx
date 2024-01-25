import React, { useState } from "react";
import {
  HeaderAppBar,
  HeaderBox,
  HeaderButtonAccount,
  HeaderButtonCart,
  HeaderCategoryBox,
  HeaderContentBox,
  HeaderTextStyle,
  HeaderToolbar,
  LogoBox,
  SearchBox,
  SearchLabel,
} from "./styles";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import {
  CloseRounded,
  MenuRounded,
  PersonRounded,
  Public,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Drom_Logo from "assets/images/Drom-logo.png";
import MenuCategory from "components/menuCategory/MenuCategory";
import SerchDrawer from "components/searchDrawer/SerchDrawer";
import ModalCart from "components/modalCart/ModalCart";
import Authentication from "components/authentication/Authentication";

const Header = ({
  authSwitch,
  toggleAuthSwitch,
  openModalAuth,
  toggleModalAuth,
}) => {
  const [language, setLanguage] = useState("ru");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModalCart, setModalCart] = useState(false);
  const [openCustomSearch, setOpenCustomSearch] = useState(false);
  const [menuIconDesign, setMenuIconDesign] = useState(true);
  const [visibilityList, setVisibilityList] = useState(null);

  const [visibilityDesignList, setVisibilityDesignList] = useState({
    tables: false,
    chairs: false,
    armChairs: false,
    sofas: false,
    decor: false,
    bedding: false,
    finishMaterials: false,
  });

  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const toMainPage = () => {
    navigate("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
    setMenuIconDesign((open) => !open);

    if (openMenu) {
      setTimeout(() => {
        setVisibilityList(null);
      }, 1000);
    }

    setVisibilityDesignList({
      tables: false,
      chairs: false,
      armChairs: false,
      sofas: false,
      decor: false,
      bedding: false,
      finishMaterials: false,
    });
  };

  const toggleModalCart = () => {
    setModalCart((open) => !open);
  };

  const handleChangeToCustomSearch = () => {
    setOpenCustomSearch((open) => !open);
  };

  return (
    <HeaderAppBar>
      <HeaderToolbar>
        <HeaderBox>
          <HeaderContentBox>
            <IconButton onClick={toggleMenu}>
              {menuIconDesign ? <MenuRounded /> : <CloseRounded />}
            </IconButton>

            <SearchBox
              variant="contained"
              onClick={() => handleChangeToCustomSearch()}
            >
              <SearchLabel variant="text">{t("headerSearchLabel")}</SearchLabel>
              <SearchRounded />
            </SearchBox>
          </HeaderContentBox>

          <HeaderContentBox>
            <LogoBox onClick={toMainPage}>
              <img width={"140px"} src={Drom_Logo} alt="Drom" />
            </LogoBox>
          </HeaderContentBox>

          <HeaderContentBox>
            <HeaderButtonAccount
              variant="Outlined"
              onClick={() => toggleModalAuth()}
            >
              {t("headerButtonAccount")}
              <IconButton>
                <PersonRounded />
              </IconButton>
            </HeaderButtonAccount>

            <HeaderButtonCart variant="contained" onClick={toggleModalCart}>
              {t("headerButtonCart")}
              <IconButton>
                <ShoppingCartRounded />
              </IconButton>
            </HeaderButtonCart>

            <Tooltip title="Language">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Public sx={{ color: "green" }} />
              </IconButton>
            </Tooltip>

            <Menu
              value={language}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              <MenuItem onClick={() => handleChangeLanguage("en")}>EN</MenuItem>
              <MenuItem onClick={() => handleChangeLanguage("ru")}>RU</MenuItem>
            </Menu>
          </HeaderContentBox>
        </HeaderBox>

        <HeaderCategoryBox>
          <HeaderTextStyle>{t("categoryTables")}</HeaderTextStyle>
          <HeaderTextStyle>{t("categoryChairs")}</HeaderTextStyle>
          <HeaderTextStyle>{t("categoryArmChairs")}</HeaderTextStyle>
          <HeaderTextStyle>{t("categorySofas")}</HeaderTextStyle>
          <HeaderTextStyle>{t("categoryDecor")}</HeaderTextStyle>
          <HeaderTextStyle>{t("categoryBedding")}</HeaderTextStyle>
          <HeaderTextStyle>{t("categoryFinishMaterials")}</HeaderTextStyle>
        </HeaderCategoryBox>

        <SerchDrawer
          open={openCustomSearch}
          onClose={handleChangeToCustomSearch}
        />

        <MenuCategory
          open={openMenu}
          onClose={toggleMenu}
          visibilityList={visibilityList}
          setVisibilityList={setVisibilityList}
          visibilityDesignList={visibilityDesignList}
          setVisibilityDesignList={setVisibilityDesignList}
        />

        <ModalCart open={openModalCart} onClose={toggleModalCart} />

        <Authentication
          open={openModalAuth}
          onClose={toggleModalAuth}
          authSwitch={authSwitch}
          toggleAuthSwitch={toggleAuthSwitch}
        />
      </HeaderToolbar>
    </HeaderAppBar>
  );
};

export default Header;
