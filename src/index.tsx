import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app';
import {offers} from './mocks/offers';
import {favorites} from './mocks/favorites';
import { cities } from './mocks/cities';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './component/error-message/error-message';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        offers = {offers}
        favorites = {favorites}
        cities = {cities}
        reviews = {reviews}
      />
    </Provider>

  </React.StrictMode>
);
