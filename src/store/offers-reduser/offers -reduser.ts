import { createSlice } from '@reduxjs/toolkit';
import { ExtendedOffer } from '../../types/extended offer';
import { Offer } from '../../types/offer';
import { changeOffer, getFavoritesOffers, getNearbyOffers, getOfferId, getOffers } from '../action';

const offersInitialState: {
  offers: Offer[];
  offer: ExtendedOffer | null;
  nearbyOffers: Offer[];
  favoritesOffers: Offer[];
} = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  favoritesOffers: []
};

export const offersReduser = createSlice({
  name: 'offersReduser',
  initialState: offersInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getOffers, (state, {payload}) => {
        state.offers = payload;
      })
      .addCase(changeOffer, (state, {payload}) => {
        state.offers = state.offers.map((offer) => {
          if (offer.id === payload.id){
            return payload;
          }
          return offer;
        });
      })
      .addCase(getOfferId, (state, {payload}) => {
        state.offer = payload;
      })
      .addCase(getNearbyOffers, (state, {payload}) => {
        state.nearbyOffers = payload;
      })
      .addCase(getFavoritesOffers, (state, {payload}) => {
        state.favoritesOffers = payload;
      });
  }
});
