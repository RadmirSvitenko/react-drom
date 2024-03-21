import axios from 'axios';
import { getTokenFromCookies } from 'cookies';

const TOKEN = getTokenFromCookies();

export const API = axios.create({
  baseURL: 'https://backend.dromstor.com/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
