import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@/styles/Index.css';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

import router from '@/router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
