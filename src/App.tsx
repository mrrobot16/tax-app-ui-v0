import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AppRouter from 'AppRouter';
import { Layout } from 'components';


function App() {
  return (
      <Layout>
        <AppRouter />
      </Layout>
  );
}

export default App;
