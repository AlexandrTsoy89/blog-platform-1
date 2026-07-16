import axios from 'axios';

const api = axios.create({
  baseURL: 'https://realworld.habsida.net/api',
});

export default api;
