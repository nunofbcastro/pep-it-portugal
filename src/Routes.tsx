import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './pages/404';

import Layout from './components/Layout';

import Home from './pages/Home';
import Chatgpt from './pages/Chatgpt';
import Companies from './pages/Companies';
import Courses from './pages/Courses';
import Frameworks from './pages/Frameworks';
import Salaries from './pages/Salaries';
import WorkMode from './pages/WorkMode';

const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'chatgpt',
    element: <Chatgpt />,
  },
  {
    path: 'companies',
    element: <Companies />,
  },
  {
    path: 'courses',
    element: <Courses />,
  },
  {
    path: 'frameworks',
    element: <Frameworks />,
  },
  {
    path: 'salaries',
    element: <Salaries />,
  },
  {
    path: 'workmode',
    element: <WorkMode />,
  },
];

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: routes,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename: '/pep-it-portugal' }
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
