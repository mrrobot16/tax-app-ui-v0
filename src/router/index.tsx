import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Chat, Test } from 'containers';


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
    path: '/test',
    element: <Test />,
  },
];


const router = createBrowserRouter(routes);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;
