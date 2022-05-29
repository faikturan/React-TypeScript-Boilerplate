import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from 'Store/store';
import { Layout } from 'Components';
import AppRoutes from './Routes';

import './Style/global.scss';
import './Style/tailwind.css';

import pjson from '../package.json';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter basename={pjson.homepage}>
          <Helmet title={pjson.name} />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
