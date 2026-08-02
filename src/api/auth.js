import axios from 'axios';

const api = axios.create({
  baseURL: 'https://realworld.habsida.net/api',
});

export const registerUser = (user) => {
  return api.post('/users', {
    user,
  });
};

export const loginUser = (userData) => {
  return api.post('/users/login', {
    user: userData,
  });
};
