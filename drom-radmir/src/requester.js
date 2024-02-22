import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://188.116.20.7:8000/',
  // baseURL: 'https://api.escuelajs.co/api/v1/',
});
