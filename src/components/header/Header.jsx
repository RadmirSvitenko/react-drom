import React, { useCallback, useEffect, useState } from 'react';
import {
  CustomAccountMenu,
  HeaderAccount,
  HeaderAppBar,
  HeaderBox,
  HeaderCategoryBox,
  HeaderContentBox,
  HeaderIconBox,
  HeaderTextStyle,
  HeaderToolbar,
  LogoBox,
  SearchField,
} from './styles';
import {
  Autocomplete,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tabs,
  Tooltip,
} from '@mui/material';
import {
  Close,
  CloseRounded,
  LogoutRounded,
  MenuRounded,
  Search,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logotype from 'assets/images/logotype.svg';
import favorite_icon from 'assets/images/favorite_icon.png';
import bag_icon from 'assets/images/bag_icon.png';
import user_icon from 'assets/images/user_icon.png';
import language_icon from 'assets/images/language_icon.png';

import MenuCategory from 'components/menuCategory/MenuCategory';
import ModalCart from 'components/modalCart/ModalCart';
import Authentication from 'components/authentication/Authentication';
import { getTokenFromCookies } from 'cookies';
import { removeTokensFromCookies } from 'cookies';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getFavorites, getProducts } from 'reducers/productSlice';
import ModalFavorites from 'components/modalFavorites/ModalFavorites';

const Header = ({
  authSwitch,
  toggleAuthSwitch,
  openModalAuth,
  toggleModalAuth,
}) => {
  const TOKEN = getTokenFromCookies();

  const products = useSelector((state) => state.productReducer.catalog) || [];
  const cartCounter = useSelector((state) => state.productReducer.cart);
  const favoritesCounter =
    useSelector((state) => state.productReducer.favorites) || [];

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [language, setLanguage] = useState('ru');
  const [searchValue, setSearchValue] = useState('');
  const [searchAutocomplite, setSearchAutocomplite] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModalCart, setModalCart] = useState(false);
  const [openModalFavorites, setModalFavorites] = useState(false);
  const [menuIconDesign, setMenuIconDesign] = useState(true);
  const [accountMenuChecked, setAccountMenuChecked] = useState(null);
  const [visibility, setVisibility] = useState({
    bind: null,
    checkedName: '',
    design: false,
    icon: false,
  });

  // let totalQuantityFavorites = favoritesCounter.reduce(
  //   (acc, { quantity }) => acc + quantity,
  //   0
  // );

  const handleLogout = () => {
    removeTokensFromCookies();
    window.location.reload();
  };

  const accountMenu = [
    {
      name: t('accountMenuLogout'),
      image: <LogoutRounded />,
      onClick: handleLogout,
    },
  ];

  const open = Boolean(anchorEl);
  const openAccount = Boolean(accountMenuChecked);

  const toMainPage = () => {
    navigate('/');
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

    setVisibility({
      bind: null,
      checkedNameCategory: '',
      checkedNameSubcategory: '',
      design: false,
    });
  };

  const toggleModalCart = () => {
    setModalCart((open) => !open);
  };

  const toggleModalFavorites = () => {
    setModalFavorites((open) => !open);
  };

  const handleChangeAccountMenu = (e) => {
    setAccountMenuChecked(e.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuChecked(null);
  };

  const getTotatQuantityFavorites = async () => {
    const favoritesData = await dispatch(getCart());
  };

  const handleSearchChange = (e, value) => {
    const inputValue = value;

    const autocompliteProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    setSearchValue(inputValue);
    setSearchAutocomplite(autocompliteProducts);
  };

  const handleSearchClose = () => {
    setSearchValue('');
    setSearchAutocomplite([]);
    dispatch(getProducts({ title: '' }));
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/catalog/title/${searchValue}`);
  };

  const handleGetData = useCallback(async () => {
    await dispatch(getProducts());
    await dispatch(getCart());
    await dispatch(getFavorites());
  }, [dispatch]);

  let totalQuantityCart = 0;

  if (Array.isArray(cartCounter)) {
    totalQuantityCart = cartCounter.reduce(
      (acc, { quantity }) => acc + quantity,
      0
    );
  }

  let totalQuantityFavorites = 0;

  if (Array.isArray(favoritesCounter) && favoritesCounter.length > 0) {
    totalQuantityFavorites = favoritesCounter.length;
  }

  useEffect(() => {
    getTokenFromCookies();
    handleGetData();
    getTotatQuantityFavorites();
  }, [TOKEN]);

  return (
    <HeaderAppBar>
      <HeaderToolbar>
        <HeaderBox>
          <HeaderContentBox sx={{ gap: '50px' }}>
            <IconButton onClick={toggleMenu}>
              {menuIconDesign ? <MenuRounded /> : <CloseRounded />}
            </IconButton>

            <LogoBox onClick={toMainPage}>
              <img width={'120px'} src={logotype} alt="Drom" />
            </LogoBox>
          </HeaderContentBox>

          <HeaderContentBox>
            <form onSubmit={handleSearchSubmit}>
              <Autocomplete
                value={searchValue}
                freeSolo
                autoComplete
                clearOnBlur
                id="free-solo-2-demo"
                disableClearable
                options={searchAutocomplite?.map((product) => product.title)}
                onChange={handleSearchChange}
                renderInput={(params) => (
                  <SearchField
                    {...params}
                    value={searchValue}
                    onChange={(e) => handleSearchChange(e, e.target.value)}
                    InputProps={{
                      style: { outline: '1px solid #000' },
                      ...params.InputProps,
                      type: 'search',
                      clearIcon: false,
                      endAdornment: (
                        <Box sx={{ display: 'flex' }}>
                          <IconButton type="submit">
                            <Search />
                          </IconButton>
                          {searchValue.length > 0 ||
                          searchAutocomplite.length > 0 ? (
                            <IconButton onClick={() => handleSearchClose()}>
                              <Close />
                            </IconButton>
                          ) : (
                            <></>
                          )}
                        </Box>
                      ),
                    }}
                    placeholder={t('headerSearchLabel')}
                  />
                )}
              />
            </form>
          </HeaderContentBox>

          <HeaderIconBox>
            <Tooltip title={t('titleFavorite')}>
              <IconButton onClick={toggleModalFavorites}>
                <Badge badgeContent={totalQuantityFavorites} color="secondary">
                  <img
                    src={favorite_icon}
                    alt={t('titleFavorite')}
                    width={'26px'}
                    height={'26px'}
                  />
                </Badge>
              </IconButton>
            </Tooltip>

            {TOKEN ? (
              <>
                <Tooltip title={t('titleAccount')}>
                  <IconButton
                    onClick={handleChangeAccountMenu}
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <HeaderAccount />
                  </IconButton>
                </Tooltip>

                <CustomAccountMenu
                  open={openAccount}
                  anchorEl={accountMenuChecked}
                  id="account-menu"
                  onClose={handleAccountMenuClose}
                  onClick={handleAccountMenuClose}
                >
                  {accountMenu?.map(({ name, image, onClick }) => (
                    <MenuItem>
                      <ListItemIcon onClick={onClick}>{image}</ListItemIcon>
                      <ListItemText
                        sx={{ textTransform: 'capitalize' }}
                        onClick={onClick}
                      >
                        {name}
                      </ListItemText>
                    </MenuItem>
                  ))}
                </CustomAccountMenu>
              </>
            ) : !TOKEN || TOKEN === 'undefined' ? (
              <Tooltip title={t('titleAccount')}>
                <IconButton onClick={() => toggleModalAuth()}>
                  <img
                    src={user_icon}
                    alt={t('titleAccount')}
                    width={'26px'}
                    height={'26px'}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              false
            )}

            <Tooltip title={t('titleCart')}>
              <IconButton onClick={toggleModalCart}>
                <Badge badgeContent={totalQuantityCart} color="secondary">
                  <img
                    src={bag_icon}
                    alt={t('titleCart')}
                    width={'26px'}
                    height={'26px'}
                  />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title={t('titleLanguage')}>
              <IconButton
                onClick={handleClick}
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <img
                  src={language_icon}
                  alt={t('titleLanguage')}
                  width={'26px'}
                  height={'26px'}
                />
              </IconButton>
            </Tooltip>

            <Menu
              value={language}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              <MenuItem onClick={() => handleChangeLanguage('en')}>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                  <img
                    src={language_icon}
                    alt={t('titleLanguage')}
                    width={'32px'}
                    height={'32px'}
                  />
                  English
                </Box>
              </MenuItem>

              <MenuItem onClick={() => handleChangeLanguage('ru')}>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                  <img
                    src={language_icon}
                    alt={t('titleLanguage')}
                    width={'32px'}
                    height={'32px'}
                  />
                  Русский
                </Box>
              </MenuItem>
            </Menu>
          </HeaderIconBox>
        </HeaderBox>

        <MenuCategory
          open={openMenu}
          onClose={toggleMenu}
          visibility={visibility}
          setVisibility={setVisibility}
        />

        <ModalCart open={openModalCart} onClose={toggleModalCart} />
        <ModalFavorites
          open={openModalFavorites}
          onClose={toggleModalFavorites}
        />

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
