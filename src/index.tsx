import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app';
import {favorites} from './mocks/favorites';
import { cities } from './mocks/cities';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './component/error-message/error-message';
import { fetchOffersAction } from './store/api-actions';
import { checkAuthAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        favorites = {favorites}
        cities = {cities}
      />
    </Provider>

  </React.StrictMode>
);
