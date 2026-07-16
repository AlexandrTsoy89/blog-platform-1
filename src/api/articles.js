import api from './api';

export const getArticles = (limit = 5, offset = 0) => {
  return api.get('/articles', {
    params: {
      limit,
      offset,
    },
  });
};
