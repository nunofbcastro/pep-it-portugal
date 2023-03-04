import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './pages/404';

import Layout from './components/Layout';

import Home from './pages/Home';
import ChatGPT from './pages/ChatGPT';
import Companies from './pages/Companies';
import Courses from './pages/Courses';
import Frameworks from './pages/Frameworks';
import Salaries from './pages/Salaries';
import WorkMode from './pages/WorkMode';
import FirstJob from './pages/FirstJob';

const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'chatgpt',
    element: <ChatGPT />,
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
  {
    path: 'firstjob',
    element: <FirstJob />,
  },
];

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
