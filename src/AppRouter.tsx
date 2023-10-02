import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Chat } from 'containers';

export const routes = [
    {
        path: '/',
        element: <Chat />,
    },
    {
      path: '/chat',
      element: <Chat />,
  },
];


const router = createBrowserRouter(routes);

function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
