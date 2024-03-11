import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { getOffersByCity } from './action';
import { Offer } from '../types/offer';
// import

const initialState = {
  currentСity: 'Paris',
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.currentСity = payload;
    })
    .addCase(getOffersByCity, (state, {payload}) => {
      state.offers = payload.filter((offer: Offer) => offer.city.name === state.currentСity)
    });
});
export {reducer, getOffersByCity};
