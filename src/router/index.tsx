import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Chat, ChatV2 } from 'containers';


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
    path: '/v2',
    element: <ChatV2 />,
  },
];


const router = createBrowserRouter(routes);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;
