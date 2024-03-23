import axios from 'axios';
import { getTokenFromCookies } from 'cookies';

export const API = axios.create({
  baseURL: 'https://backend.dromstor.com/',
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookies();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
