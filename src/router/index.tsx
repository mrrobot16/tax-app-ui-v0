import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Chat } from 'containers';
import { Chat2 } from 'containers/Chat2';

export const routes = [
  {
    path: '/',
    element: <Chat />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/chat2',
    element: <Chat2 />,
  },
];


const router = createBrowserRouter(routes);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;
