import Cookies from 'universal-cookie';
import { COOKIE_KEYS } from 'cookieStore';

const cookies = new Cookies();
const { TOKEN, REFRESH } = COOKIE_KEYS;

export const getTokenFromCookies = () => {
  return cookies.get(TOKEN);
};

export const setTokenFromCookies = (token) => {
  cookies.set(TOKEN, token, {
    path: '/',
    sameSite: true,
  });
};

export const getRefreshTokenToCookies = () => {
  return cookies.get(REFRESH);
};

export const setRefreshTokenToCookies = (token) => {
  cookies.set(REFRESH, token, {
    path: '/',
    sameSite: true,
  });
};

export const removeTokensFromCookies = () => {
  cookies.remove(TOKEN, { path: '/' });
  cookies.remove(REFRESH, { path: '/' });
};
