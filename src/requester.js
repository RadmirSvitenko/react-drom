import axios from 'axios';

export const API = axios.create({
  // baseURL: 'http://dev.drom-store.com/api/v1',
  baseURL: 'https://api.escuelajs.co/api/v1',
});
