import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './pages/404';

import Layout from './components/Layout';

import Page from './components/Page';
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
    element: (
      <Page>
        <Home />
      </Page>
    ),
  },
  {
    path: 'chatgpt',
    element: (
      <Page title="ChatGPT">
        <ChatGPT />
      </Page>
    ),
  },
  {
    path: 'companies',
    element: (
      <Page title="Empresas">
        <Companies />
      </Page>
    ),
  },
  {
    path: 'courses',
    element: (
      <Page title="Cursos">
        <Courses />
      </Page>
    ),
  },
  {
    path: 'frameworks',
    element: (
      <Page title="Frameworks">
        <Frameworks />
      </Page>
    ),
  },
  {
    path: 'salaries',
    element: (
      <Page title="Salários">
        <Salaries />
      </Page>
    ),
  },
  {
    path: 'workmode',
    element: (
      <Page title="Modo de trabalho">
        <WorkMode />
      </Page>
    ),
  },
  {
    path: 'firstjob',
    element: (
      <Page title="Primeiro emprego">
        <FirstJob />
      </Page>
    ),
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
    element: (
      <Page title="404">
        <NotFound />
      </Page>
    ),
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
