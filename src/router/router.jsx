import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import Article from '@/pages/Article/Article';
import NotFound from '../pages/NotFound/NotFound';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import Settings from '@/pages/Settings/Settings';
import Profile from '@/pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'test',
        element: <h1>TEST PAGE</h1>,
      },

      {
        path: 'articles',
        element: <Home />,
      },

      {
        path: 'articles/:slug',
        element: <Article />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
