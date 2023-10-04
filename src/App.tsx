import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Router from 'router';
import { Layout } from 'components';

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
