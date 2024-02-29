import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app';
import {offers} from './mocks/offers';
import {favorites} from './mocks/favorites';
import { cities } from './mocks/cities';
import { extendedOffers } from './mocks/extended-offer';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const placeCount = 132;

root.render(
  <React.StrictMode>
    <App
      placeCount = {placeCount}
      offers = {offers}
      favorites = {favorites}
      cities = {cities}
      extendedOffers = {extendedOffers}
      reviews = {reviews}
    />
  </React.StrictMode>
);
