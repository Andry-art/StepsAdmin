import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../screens/logIn/LogIn';
import Main from '../screens/main/Main';
import NewDiscount from '../screens/main/NewDiscount';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/new_discount',
    element: <NewDiscount />,
  },
]);
