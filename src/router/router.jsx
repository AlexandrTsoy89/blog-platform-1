import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout/MainLayout';
import HomePage from '@/pages/HomePage';
import ArticlePage from '@/pages/ArticlePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'articles',
        element: <HomePage />,
      },

      {
        path: 'articles/:slug',
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;
