import axios from 'axios';
import { getTokenFromCookies } from 'cookies';

export const API = axios.create({
  baseURL: 'https://backend.dromstor.com/',
});

// API.interceptors.request.use(
//   function (config) {
//     const customConfig = config;
//     const TOKEN = getTokenFromCookies();

//     if (TOKEN) {
//       customConfig.headers.Authorization = `Bearer ${TOKEN}`;
//     }
//     return customConfig;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

API.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookies();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
