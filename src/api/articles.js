import api from './api';

export const getArticles = (limit = 5, offset = 0) => {
  return api.get('/articles', {
    params: {
      limit,
      offset,
    },
  });
};

export const getArticle = (slug) => {
  return api.get(`/articles/${slug}`);
};

export const createArticle = (article) => {
  return api.post('/articles', {
    article,
  });
};
