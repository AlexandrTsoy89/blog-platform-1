import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout/MainLayout';
import HomePage from '@/pages/HomePage';
import ArticlePage from '@/pages/ArticlePage/ArticlePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

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
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
