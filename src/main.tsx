import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
