import axios from 'axios';
import { getTokenFromCookies } from 'cookies';

export const API = axios.create({
  baseURL: 'https://backend.dromstor.com/',
});
